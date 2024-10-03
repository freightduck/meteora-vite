import React from 'react';
import '../assets/Index_files/style.css';

export const LandingPage = () => {
 return (
  <div>
   {/* Navigation Bar */}
   <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
     <a className="navbar-brand" href="/">
      <img src="https://www.meteora.ag/logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
      <span>Meteora</span>
     </a>
     <form className="d-flex" role="search">
      <a className="btn-launch" href="/pools">
       Launch App
      </a>
     </form>
    </div>
   </nav>

   {/* Main Section */}
   <section className="main">
    <div className="main-content">
     <div className="main-t">
      <p>Meteora</p>
     </div>

     <div className="main-p">
      <p>Building the best LP tech and LP Army in crypto</p>
     </div>

     <div>
      <a href="/pools" className="main-b">
       Launch App
      </a>
     </div>
    </div>
   </section>
  </div>
 );
};
