import React, { useEffect, useRef, useState } from "react";
import "../Chatbot.css";
import TypingIndicator from "./TypingIndicator";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const emojiContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiOptions = [
    "😀",
    "😄",
    "😊",
    "😉",
    "😍",
    "😇",
    "🥳",
    "🤗",
    "😅",
    "😴",
    "🤯",
    "🤩",
    "🤔",
    "😎",
    "😭",
    "😤",
    "👍",
    "👎",
    "🎉",
    "🔥",
    "✨",
    "🌟",
    "✅",
    "⚠️",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "🌿",
    "🐾",
    "🦁",
    "🐅",
    "🐘",
    "🦜",
    "🦉",
    "📷",
    "🏕️",
    "🏞️",
    "🌄",
    "🌅",
    "🌌",
    "🌧️",
    "❓",
    "🙌",
    "🙏",
    "💡",
    "🧭",
    "🎯",
  ];

  useEffect(() => {
    // Close the emoji picker when clicking outside
    const handleClickOutside = (event) => {
      if (
        showEmojiPicker &&
        emojiContainerRef.current &&
        !emojiContainerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmojiPicker]);

  useEffect(() => {
    if (isBotThinking) {
      setShowEmojiPicker(false);
    }
  }, [isBotThinking]);

  const handleEmojiSelect = (emoji) => {
    if (!inputRef.current) return;
    const input = inputRef.current;
    const { selectionStart = input.value.length, selectionEnd = input.value.length } =
      input;
    const newValue =
      input.value.slice(0, selectionStart) +
      emoji +
      input.value.slice(selectionEnd);
    input.value = newValue;

    const newCursorPosition = selectionStart + emoji.length;
    input.setSelectionRange(newCursorPosition, newCursorPosition);
    input.focus();
    setShowEmojiPicker(false);
  };

  const handleKeyDown = (e) => {
    // Submit on Enter (Shift+Enter keeps a new line)
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleFormSubmit(e);
    }
  };

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

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const result = reader.result;
      if (typeof result !== "string") {
        setIsUploading(false);
        return;
      }

      // Extract base64 without prefix
      const base64Data = result.split(",")[1];

      const imageMessage = {
        role: "user",
        text: `Image attached: ${file.name}. Please analyze and describe key details for wildlife context.`,
        imageData: base64Data,
        imageType: file.type || "image/jpeg",
        imagePreview: result,
      };

      const updatedHistory = [...chatHistory, imageMessage];
      setChatHistory(updatedHistory);

      setIsBotThinking(true);
      const thinkingMessage = {
        role: "model",
        text: "typing",
        isTyping: true,
      };
      setChatHistory((prev) => [...prev, thinkingMessage]);

      try {
        await generateBotResponse(updatedHistory);
      } finally {
        setIsBotThinking(false);
        setIsUploading(false);
      }
    };

    reader.readAsDataURL(file);
    // reset the input so same file can be chosen again
    event.target.value = "";
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <textarea
        ref={inputRef}
        rows={2}
        placeholder="Message..."
        className="message-input"
        required
        disabled={isBotThinking || isUploading}
        onKeyDown={handleKeyDown}
      />
      <div className="chat-controls">
        <div className="emoji-wrapper" ref={emojiContainerRef}>
          <button
            type="button"
            id="emoji-picker"
            className="material-symbols-rounded"
            disabled={isBotThinking || isUploading}
            aria-label="Open emoji picker"
            aria-expanded={showEmojiPicker}
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            sentiment_satisfied
          </button>
          <div
            className={`emoji-popover ${showEmojiPicker ? "show" : ""}`}
            role="listbox"
            aria-label="Emoji picker"
          >
            <div className="emoji-grid">
              {emojiOptions.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  className="emoji-button"
                  onClick={() => handleEmojiSelect(emoji)}
                  aria-label={`Insert emoji ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="file-upload-wrapper">
          <input
            type="file"
            accept="images/*"
            id="file-input"
            hidden
            disabled={isBotThinking || isUploading}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button
            type="button"
            id="file-upload"
            className="material-symbols-rounded"
            disabled={isBotThinking || isUploading}
            onClick={() => fileInputRef.current?.click()}
          >
            attach_file
          </button>
        </div>
        <button
          type="submit"
          id="send-message"
          className="material-symbols-rounded"
          disabled={isBotThinking || isUploading}
        >
          {isBotThinking ? <span className="sending">↗️</span> : "arrow_upward"}
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
