// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function VoiceSearch() {
//   const [searchText, setSearchText] = useState("");
//   const [listening, setListening] = useState(false);
//   const navigate = useNavigate();

//   const handleVoice = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Use Chrome for voice search");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.start();

//     recognition.onstart = () => setListening(true);

//     recognition.onresult = (event) => {
//       let transcript = event.results[0][0].transcript.toLowerCase();

//       setSearchText(transcript);

//       // 🔥 SMART ROUTE HANDLING
//       if (transcript.includes("sign up")) {
//         navigate("/signup");
//       } 
//       else if (transcript.includes("login")) {
//         navigate("/login");
//       } 
//       else if (transcript.includes("home")) {
//         navigate("/");
//       } 
//       else {
//         // 🔍 normal search
//         navigate(`${encodeURIComponent(transcript)}`);
//       }
//     };

//     recognition.onend = () => setListening(false);
//   };

//   return (
//     <div>
//       <input
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         placeholder="Search courses..."
//       />

//       {/* 🔍 manual search */}
//       <button
//         onClick={() =>
//           navigate(`${encodeURIComponent(searchText)}`)
//         }
//       >
//         🔍
//       </button>

//       {/* 🎤 voice search */}
//       <button onClick={handleVoice}>
//         🎤 {listening ? "Listening..." : ""}
//       </button>
//     </div>
//   );
// }

// export default VoiceSearch;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VoiceSearch() {
  const [searchText, setSearchText] = useState("");
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  const handleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Use Chrome for voice search");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript.toLowerCase();

      setSearchText(transcript);

      if (transcript.includes("sign up")) {
        navigate("/signup");
      } else if (transcript.includes("login")) {
        navigate("/login");
      } else if (transcript.includes("home")) {
        navigate("/");
      } else {
        navigate(`${encodeURIComponent(transcript)}`);
      }
    };

    recognition.onend = () => setListening(false);
  };

  return (
    <div className="fixed top-15 left-1/2 transform -translate-x-1/2 z-50">

      {/* 🔥 SEARCH BAR */}
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg 
        bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500
        ${listening ? "scale-110 opacity-100" : "scale-95 opacity-80 animate-pulse"}
        `}
      >
        {/* INPUT */}
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Here..."
          className="bg-transparent outline-none text-white placeholder-white w-60"
        />

        {/* 🔍 BUTTON */}
        <button
          onClick={() =>
            navigate(`${encodeURIComponent(searchText)}`)
          }
          className="text-white hover:scale-110 transition"
        >
          🔍
        </button>

        {/* 🎤 VOICE */}
        <button
          onClick={handleVoice}
          className={`text-white transition ${
            listening ? "animate-bounce" : ""
          }`}
        >
          🎤
        </button>
      </div>
    </div>
  );
}

export default VoiceSearch;