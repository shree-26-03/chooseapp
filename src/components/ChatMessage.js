import React from "react";
import "../css/ChatMessage.css"; // Import the CSS for styling

const ChatMessage = ({ message, icon, align, showIcon }) => {
  return (
    <div className={`chat-message ${align} ${showIcon ? "with-icon" : ""}`}>
      {showIcon && icon && <img src={icon} alt="icon" className="chat-icon" />}
      <p className={`chat-text ${showIcon ? "with-icon" : "without-icon"}`}>
        {message}
      </p>
    </div>
  );
};

export default ChatMessage;
