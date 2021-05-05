import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserTag } from "@fortawesome/free-solid-svg-icons";

const Auction = ({ auction }) => {
  const totalAuctonPrice = auction.reduce(
    (sum, player) => sum + player.price,
    0
  );
  const playerPriceStyle = {
    fontSize: "18px",
  };
  return (
    <aside className='col-md-4'>
      <h4 className='lead fw-bold my-2'>
        <FontAwesomeIcon icon={faUsers} /> Team members in auction (
        {auction.length})
      </h4>
      <ul className='list-group'>
        {auction.map((auctionPlayer) => (
          <li
            key={auctionPlayer.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <FontAwesomeIcon
              icon={faUserTag}
              style={{ color: "green", fontSize: "18px" }}
            />
            <strong>{auctionPlayer.name}</strong>
            <span style={playerPriceStyle} className='badge bg-primary pill'>
              ${auctionPlayer.price}
            </span>
          </li>
        ))}

        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <strong>Total auction amount : </strong>
          <span style={playerPriceStyle} className='badge bg-success pill'>
            ${totalAuctonPrice}
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default Auction;
