import React, { useState } from "react";
import './bubbleChat.css'
const BubbleChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Komponen ChatBubble
  const ChatBubble = ({ message, isSender }) => {
    return (
      <div
        className={`d-flex ${
          isSender ? "justify-content-end" : "justify-content-start"
        } mb-2`}
      >
        <div
          className={`card p-2 ${
            isSender ? "bg-primary text-white" : "bg-light text-dark"
          }`}
          style={{ maxWidth: "75%" }}
        >
          {message}
        </div>
      </div>
    );
  };

  // Fungsi untuk mengirim pesan
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Tambahkan pesan baru ke array
    setMessages([...messages, { text: inputValue, isSender: true }]);
    setInputValue("");

    // Simulasi balasan otomatis
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is an automatic reply!", isSender: false },
      ]);
    }, 1000);
  };

  return ( 
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="container-chat col-10">
        {/* <div className="container mt-5"> */}
            <div className="card p-3" style={{ height: "500px", overflowY: "auto" }}>
              {messages.map((msg, index) => (
                <ChatBubble key={index} message={msg.text} isSender={msg.isSender} />
              ))}
            </div>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button className="btn btn-primary" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BubbleChat;
