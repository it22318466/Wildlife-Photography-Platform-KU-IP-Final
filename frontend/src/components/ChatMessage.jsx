import React from "react";
import ChatbotIcon from "./ChatbotIcon";
import TypingIndicator from "./TypingIndicator";
import "../Chatbot.css";

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;

  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
        chat.isError ? "error" : ""
      }`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">
        {chat.isTyping ? <TypingIndicator /> : chat.text}
      </p>
      {chat.imagePreview && (
        <img
          src={chat.imagePreview}
          alt="Uploaded"
          className="chat-image-preview"
        />
      )}
    </div>
  );
};

export default ChatMessage;
