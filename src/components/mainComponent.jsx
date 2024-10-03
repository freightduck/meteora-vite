import React from 'react';
import '../assets/Home_files/home.css'; // Ensure this file is in the same directory

export const Main = () => {
 return (
  <div>
   <main>
    <section className="pools-summary">
     <p>Meteora Pools</p>
     <div className="pool-summary-links">
      <ul>
       <li>
        <a className="active" href="/welcome">
         Dynamic Pools
        </a>
       </li>
       <li>
        <a className="link2" href="/welcome">
         Pool with Farms
        </a>
       </li>
       <li>
        <a className="link2" href="/welcome">
         LST Pools
        </a>
       </li>
       <li>
        <a className="link2" href="/welcome">
         Multi-token Pools
        </a>
       </li>
      </ul>
     </div>
    </section>

    <section>
     <div className="pool-stats">
      <div className="stat">
       <h3>Total Value Locked</h3>
       <p>$92,211,000.63</p>
      </div>
      <div className="stat">
       <h3>
        Swap Volume
        <span className="stat-time1" style={{ marginLeft: '235px', color: '#ff693b', fontSize: '12px', cursor: 'pointer', fontWeight: 400 }}>
         24H
        </span>
        <span className="stat-time2" style={{ marginLeft: '3px', color: '#000000', fontSize: '12px', cursor: 'pointer', fontWeight: 400 }}>
         All
        </span>
       </h3>
       <p>$18,674,602.52</p>
      </div>
      <div className="stat">
       <h3>Fee</h3>
       <p>$162,861.51</p>
      </div>
     </div>
    </section>

    <section className="pool-table">
     <div className="pool-table-header">
      <input className="search-input" type="text" placeholder="Search by token name, symbol, etc." />
      <button id="connectWalletBtn" className="create-pool">
       + Create Pool
      </button>
     </div>

     <div className="table-container">
      <div className="table-header">
       <div className="column column-header">Pool</div>
       <div className="column column-header header0">Type</div>
       <div className="column column-header tvl">
        TVL/<span className="vol">24H Vol</span>
       </div>
       <div className="column column-header header1">24H Vol</div>
       <div className="column column-header">365d Yield / TVL</div>
       <div className="column column-header header3">LM APR</div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FbSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1%2Flogo.png" alt="Placeholder" />
        SOL-bSOL
        <img src="https://app.meteora.ag/icons/logo.svg" alt="Placeholder" className="column-next-img" />
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">LST</span>
       </div>
       <div className="column column-value">$9.51m</div>
       <div className="column column-value">$2,105,717.20</div>
       <div className="column">
        <span className="yield">1.14%</span>
       </div>
       <div className="column">
        <span className="apr">2.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FmSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So%2Flogo.png" alt="Placeholder" />
        SOL-mSOL
        <img src="https://app.meteora.ag/icons/logo.svg" alt="Placeholder" className="column-next-img" />
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">LST</span>
       </div>
       <div className="column column-value">$10.51m</div>
       <div className="column column-value">$1,805,717.05</div>
       <div className="column">
        <span className="yield">1.14%</span>
       </div>
       <div className="column">
        <span className="apr">2.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v%2Flogo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEs9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB%2Flogo.svg" alt="Placeholder" />
        USDC-USDT
        <img src="https://app.meteora.ag/icons/logo.svg" alt="Placeholder" className="column-next-img" />
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$11.51m</div>
       <div className="column column-value">$2,605,717.75</div>
       <div className="column">
        <span className="yield">1.84%</span>
       </div>
       <div className="column">
        <span className="apr">1.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fstorage.googleapis.com%2Ftoken-metadata%2FJitoSOL-256.png" alt="Placeholder" />
        SOL-jitoSOL
        <img src="https://app.meteora.ag/icons/logo.svg" alt="Placeholder" className="column-next-img" />
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">LST</span>
       </div>
       <div className="column column-value">$7.21m</div>
       <div className="column column-value">$1,305,717.11</div>
       <div className="column">
        <span className="yield">1.64%</span>
       </div>
       <div className="column">
        <span className="apr">2.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FLFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp%2Flogo.svg" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v%2Flogo.png" alt="Placeholder" />
        LFNTY-USDC
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$2,565,010.5</div>
       <div className="column column-value">$9,215.65</div>
       <div className="column">
        <span className="yield">1.11%</span>
       </div>
       <div className="column">
        <span className="apr">0.86%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fbafkreig55mf3lazzbgndiqyqvdmchdsykvvebww7cqlws6ywgog5xfdzta.ipfs.nftstorage.link" alt="Placeholder" />
        SOL-vSOL
        <img src="https://app.meteora.ag/icons/logo.svg" alt="Placeholder" className="column-next-img" />
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$6.51m</div>
       <div className="column column-value">$1,305,717.61</div>
       <div className="column">
        <span className="yield">1.22%</span>
       </div>
       <div className="column">
        <span className="apr">0.80%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        <img src="https://gateway.irys.xyz/0qYdLixPAk4cYEpaf3ylqZ-JIbw8Vqg6R9xXZrH9SCc" alt="Placeholder" />
        SOL-ZERO
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$6.58m</div>
       <div className="column column-value">$2,625,700.23</div>
       <div className="column">
        <span className="yield">1.22%</span>
       </div>
       <div className="column">
        <span className="apr">0.80%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://gateway.irys.xyz/e_m_fuGmWQ7JDLFK1NZg2T6zhXwAFu3-HKT89LrbjoI" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        RTR-SOL
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">Meme Pool</span>
       </div>
       <div className="column column-value">$10.11m</div>
       <div className="column column-value">$1,005,545.33</div>
       <div className="column">
        <span className="yield">1.14%</span>
       </div>
       <div className="column">
        <span className="apr">0.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fbafkreiflz2xxkfn33qjch2wj55bvbn33q3s4mmb6bye5pt3mpgy4t2wg4e.ipfs.nftstorage.link" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fstatic.jup.ag%2FjupSOL%2Ficon.png" alt="Placeholder" />
        INF-JupSOL
       </div>

       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$1.51m</div>
       <div className="column column-value">$1,125,002.05</div>
       <div className="column">
        <span className="yield">2.72%</span>
       </div>
       <div className="column">
        <span className="apr">1.27%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Felephant.money%2Fimg%2Flogo%2Ftrunk-logo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v%2Flogo.png" alt="Placeholder" />
        TRUNK-USDC
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$4.25m</div>
       <div className="column column-value">$1,001,015.70</div>
       <div className="column">
        <span className="yield">1.92%</span>
       </div>
       <div className="column">
        <span className="apr">1.5%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Farweave.net%2F_0kXu92JN5uU9ELquLgSnp-XukP3D-YDTkXj-QBYS58" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        GM-SOL
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$13.51m</div>
       <div className="column column-value">$2,315,717.61</div>
       <div className="column">
        <span className="yield">1.14%</span>
       </div>
       <div className="column">
        <span className="apr">0.91%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2F6hgaiayuroxlfrn3djpb7mx4ocwielgo2ovpj4ka4v47jsxj2p2a.arweave.net%2F8cwEAxSLrrLFuxpeH7L8cKyCLM7TqvTxQOV59Mrp0_Q%3Fext%3Dpng" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v%2Flogo.png" alt="Placeholder" />
        META-USDC
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$11.21m</div>
       <div className="column column-value">$2,805,717.61</div>
       <div className="column">
        <span className="yield">1.14%</span>
       </div>
       <div className="column">
        <span className="apr">0.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FLFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp%2Flogo.svg" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FxLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu%2Flogo.svg" alt="Placeholder" />
        LFNTY-xLFNTY
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$3.01m</div>
       <div className="column column-value">$705,717.61</div>
       <div className="column">
        <span className="yield">2.76%</span>
       </div>
       <div className="column">
        <span className="apr">0.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="SOL Logo" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fstorage.googleapis.com%2Fstatic-marginfi%2Flst.png" alt="LST Logo" />
        SOL-LST
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">LST</span>
       </div>
       <div className="column column-value">$5.51m</div>
       <div className="column column-value">$805,715.61</div>
       <div className="column">
        <span className="yield">1.21%</span>
       </div>
       <div className="column">
        <span className="apr">0.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fipfs.filebase.io%2Fipfs%2FQmRT39uwenXSNpWEstYGjTFaF48YWshawLnPEV81bSpmaM" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        RETARDIO-SOL
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$1.51m</div>
       <div className="column column-value">$305,717.61</div>
       <div className="column">
        <span className="yield">1.04%</span>
       </div>
       <div className="column">
        <span className="apr">0.70%</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fgateway.pinit.io%2Fipfs%2FQmUtWudGKFeJAkXceBzgEkZdZsTTZZQvQpua48mhbH72L2%2F0" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        $FAIR-SOL
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">Meme Pool</span>
       </div>
       <div className="column column-value">$945.47K</div>
       <div className="column column-value">$53,686.33</div>
       <div className="column">
        <span className="yield">21.66%</span>
       </div>
       <div className="column">
        <span className="apr">N/A</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://gateway.irys.xyz/LKy-0Nsr1Nv_BVO5wNZrJNsHolS6p_x1hZeIDBOPD6c" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        WHEN-SOL
       </div>
       <div className="column type-column">
        <span className="type-stable">Volatile</span>
        <span className="type-stable">Dynamic</span>
        <span className="type-stable">Meme Pool</span>
       </div>
       <div className="column column-value">$758.75K</div>
       <div className="column column-value">$171.66</div>
       <div className="column">
        <span className="yield">0.98%</span>
       </div>
       <div className="column">
        <span className="apr">N/A</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEs9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB%2Flogo.svg" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FEPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v%2Flogo.png" alt="Placeholder" />
        USDT-USDC
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$698.75K</div>
       <div className="column column-value">$58,254.48</div>
       <div className="column">
        <span className="yield">5.56%</span>
       </div>
       <div className="column">
        <span className="apr">N/A</span>
       </div>
      </div>

      <div className="table-row">
       <div className="column">
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FSo11111111111111111111111111111111111111112%2Flogo.png" alt="Placeholder" />
        <img src="https://wsrv.nl/?w=48&h=48&url=https%3A%2F%2Fstatic.jup.ag%2FjupSOL%2Ficon.png" alt="Placeholder" />
        SOL-JupSOL
       </div>
       <div className="column type-column">
        <span className="type-stable">Stable</span>
        <span className="type-stable">Dynamic</span>
       </div>
       <div className="column column-value">$645.5K</div>
       <div className="column column-value">$58,254.48</div>
       <div className="column">
        <span className="yield">0.90%</span>
       </div>
       <div className="column">
        <span className="apr">N/A</span>
       </div>
      </div>
     </div>
    </section>
   </main>
  </div>
 );
};
