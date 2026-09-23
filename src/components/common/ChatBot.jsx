
// import React, { useState } from "react";
// import axios from "axios";

// function ChatBot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input) return;

//     const userMsg = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMsg]);

//     const res = await axios.post("http://127.0.0.1:5000/api/chat", {
//       message:input,
//     });

//     const botMsg = { text: res.data.reply, sender: "bot" };

//     setMessages((prev) => [...prev, botMsg]);
//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-5 right-5 w-80 bg-white text-black p-3 rounded-lg">
//       <div className="h-60 overflow-y-auto">
//         {messages.map((msg, i) => (
//           <p key={i}>{msg.text}</p>
//         ))}
//       </div>

//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="border w-full p-2"
//       />

//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default ChatBot; 
import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false); // 👈 NEW

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const res = await axios.post("http://127.0.0.1:5000/api/chat", {
      message: input,
    });

    const botMsg = { text: res.data.reply, sender: "bot" };

    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* 🔵 CIRCLE BUTTON */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 w-14 h-14 rounded-full 
          bg-gradient-to-r from-blue-500 to-purple-600 text-white 
          flex items-center justify-center cursor-pointer shadow-lg
          transition-all duration-300 hover:scale-110"
        >
          💬
        </div>
      )}

      {/* 💬 CHAT BOX */}
      <div
        className={`fixed bottom-5 right-5 w-80 bg-white text-black p-3 rounded-lg shadow-xl border
        transition-all duration-500 transform ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-10 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">ChatBot</h2>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        {/* CHAT AREA (same logic, only style added) */}
        <div className="h-60 overflow-y-auto flex flex-col gap-2 bg-gray-100 p-2 rounded">
          {messages.map((msg, i) => (
            <p
              key={i}
              className="bg-blue-100 px-2 py-1 rounded text-sm whitespace-pre-line"
            >
              {msg.text}
            </p>
          ))}
        </div>

        {/* INPUT (unchanged) */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border w-full p-2 mt-2 rounded"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white w-full mt-2 py-1 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default ChatBot;