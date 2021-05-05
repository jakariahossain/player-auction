import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

const SinglePlayer = (props) => {
  const { name, photo, price, team } = props.player;
  const [isAuction, setIsAuction] = useState(false);
  const photoStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#fff",
    border: "5px solid #ddd",
  };
  return (
    <div className='player'>
      <div className='card border-0'>
        <img
          src={photo}
          className='card-img-top rounded-circle mx-auto d-block'
          alt='...'
          style={photoStyle}
        />
        <div className='card-body'>
          <ul className='list-group'>
            <li className='list-group-item text-center text-uppercase fw-bold border-0'>
              {name}
            </li>
            <li className='list-group-item'>
              <span className='float-start'>
                <strong>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "black",
                      fontSize: "16px",
                      marginRight: "5px",
                    }}
                  />
                  Team:
                </strong>
              </span>
              <span className='float-end'>{team}</span>
            </li>

            <li className='list-group-item'>
              <span className='float-start'>
                <strong>
                  <FontAwesomeIcon
                    icon={faMoneyCheckAlt}
                    style={{
                      color: "black",
                      fontSize: "16px",
                      marginRight: "5px",
                    }}
                  />
                  Price:
                </strong>
              </span>
              <span className='float-end'>${price}</span>
            </li>
            <li className='list-group-item text-center '>
              <div className='d-grid gap-2'>
                <button
                  className='btn btn-dark'
                  disabled={isAuction}
                  onClick={() => {
                    props.addAuctionHandler(props.player);
                    setIsAuction(true);
                  }}
                >
                  {isAuction ? " ✔ Already in auction" : "Add to auction"}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
