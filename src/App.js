import React, { useState } from "react";
import Auction from "./components/Auction/Auction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";

const App = () => {
  const [auction, setAuction] = useState([]);
  const addAuctionHandler = (player) => {
    const newAuction = [...auction, player];
    setAuction(newAuction);
  };
  return (
    <>
      <Header />
      <main className='container-fluid my-5'>
        <div className='row'>
          <Players addAuctionHandler={addAuctionHandler} />
          <Auction auction={auction} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
