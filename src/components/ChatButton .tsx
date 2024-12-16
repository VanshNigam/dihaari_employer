import React from "react";

const ChatButton = () => {
  return (
    <button className="fixed bottom-52 right-6 bg-blue-600 text-white rounded-full shadow-lg">
      <img src="./chat-icon.png" alt="Chat" className="h-14 w-14" />
    </button>
  );
};

export default ChatButton;
