import React, { useRef, useState } from "react";
import "../Chatbot.css";
import TypingIndicator from "./TypingIndicator";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const [isBotThinking, setIsBotThinking] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with the user's message
    const updatedHistory = [
      ...chatHistory,
      { role: "user", text: userMessage },
    ];
    setChatHistory(updatedHistory);

    // Show typing indicator
    setIsBotThinking(true);
    const thinkingMessage = {
      role: "model",
      text: "typing", // This will be replaced by the TypingIndicator component
      isTyping: true,
    };
    setChatHistory((prev) => [...prev, thinkingMessage]);

    try {
      // Call the function to generate the bot's response
      await generateBotResponse([
        ...updatedHistory,
        {
          role: "user",
          text: `Using the details provided above, please address this query: ${userMessage}`,
        },
      ]);
    } finally {
      setIsBotThinking(false);
    }
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
        disabled={isBotThinking}
      />
      <div className="chat-controls">
        <button
          type="button"
          id="emoji-picker"
          className="material-symbols-rounded"
          disabled={isBotThinking}
        >
          sentiment_satisfied
        </button>
        <div className="file-upload-wrapper">
          <input
            type="file"
            accept="images/*"
            id="file-input"
            hidden
            disabled={isBotThinking}
          />
          <button
            type="button"
            id="file-upload"
            className="material-symbols-rounded"
            disabled={isBotThinking}
          >
            attach_file
          </button>
        </div>
        <button
          type="submit"
          id="send-message"
          className="material-symbols-rounded"
          disabled={isBotThinking}
        >
          {isBotThinking ? <span className="sending">↗️</span> : "arrow_upward"}
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
