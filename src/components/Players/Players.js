import React, { useEffect, useState } from "react";
import playerData from "../../playerData/playerData.json";
import SinglePlayer from "./SinglePlayer";

const Players = (props) => {
  const [allPlayer, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  }, []);
  return (
    <section className='players col-md-8 border-end'>
      <h4 className='text-uppercase text-center text-success mb-5'>
        BPL Players List for Auction
      </h4>
      <div className='row row-cols-3 gx-1 gy-5'>
        {allPlayer.map((player) => (
          <SinglePlayer
            addAuctionHandler={props.addAuctionHandler}
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </section>
  );
};

export default Players;
