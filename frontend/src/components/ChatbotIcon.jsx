import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const ChatbotIcon = () => {
  return (
    <div className="paw-icon" style={styles.pawContainer}>
      <FontAwesomeIcon
        icon={faPaw}
        style={{
          color: "#404650ff",
          fontSize: "20px",
        }}
      />
    </div>
  );
};

const styles = {
  pawContainer: {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "41px", // Reduced from 48px
    height: "41px", // Reduced from 48px
    ":hover": {
      transform: "scale(1.1)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      backgroundColor: "#f8f9fa",
    },
  },
};

export default ChatbotIcon;
