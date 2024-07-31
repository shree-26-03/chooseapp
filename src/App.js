import React from "react";
import "./App.css";
import HelpMeChoose from "./components/helpmechoose";
import ChatMessage from "./components/ChatMessage";
import alan from "./asset/Alen_icon.png";

const messages = [
  { text: "Apple", icon: alan },
  { text: "Sure, Which color are you looking for?" },
  { text: "Light Pink" },
  { text: "How much memory are you looking for?" },
  { text: "256GB" },
  { text: "Great! I have found the perfect phone for you" },
];

function App() {
  return (
    <div className="App">
      <HelpMeChoose />
      <div className="chat-container">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.text}
            icon={msg.icon}
            showIcon={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
