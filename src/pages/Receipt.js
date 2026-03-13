

import React, { useState } from "react";
import "./receipt.css";
import Logo from "../assets/Pi-Network (1).png";
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const Receipt = () => {
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");
  const [amount, setAmount] = useState("-556.00 Pi");
  const [receiver, setReceiver] = useState("Thao Vietnam");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAddDetails = () => {
    const newAmount = prompt("Enter new amount (e.g., -100.00 Pi):", amount);
    const newReceiver = prompt("Enter new receiver's name:", receiver);
    if (newAmount) setAmount(newAmount);
    if (newReceiver) setReceiver(newReceiver);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="app-header">
        <button onClick={handleAddDetails}>+ Add details</button>
        <button onClick={toggleDarkMode}>{isDarkMode ? "Light mode" : "Dark mode"}</button>
      </div>
      <div className="card">
        <span className="close-icon"><CloseTwoToneIcon /></span>
        <img className="pi-logo" alt="Pi Logo" src={Logo} />
        <h2>Transaction Details</h2>

        <div className="details-card">
          <div className="detail-head">Payment Sent</div>
          <div className="amount">{amount}</div>
          <div className="detail-time">{formattedDate}</div>
          <div className="detail-reciver">
            To <br />
            <span className="highlight">
              {receiver} <span style={{ color: isDarkMode ? "#bbb" : "#444" }}><KeyboardArrowDownTwoToneIcon /></span>
            </span>
          </div>
        </div>

        <div className="transaction-detail">
          <span>Fee</span> <span className="fee">0.01 Pi</span>
        </div>
        <div className="transaction-detail">
          <span>Memo</span> <span style={{ textDecoration: "none" }} className="highlight">Add a Memo</span>
        </div>
        <div className="link-detail">
          <span>Link</span>
          <a href="https://blockexplorer.minepi.co" className="link">
            blockexplorer.minepi.co<br />m
          </a>
          <span style={{ color: isDarkMode ? "#bbb" : "#444" }}><KeyboardArrowDownTwoToneIcon /></span>
        </div>
        <button className="button">Dismiss</button>
      </div>
    </div>
  );
};

export default Receipt;
