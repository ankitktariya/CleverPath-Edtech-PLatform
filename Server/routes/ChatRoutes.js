const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

  const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`,
  
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("data",data)
    

    // 🔥 DEBUG (important)
    console.log("FULL RESPONSE:", JSON.stringify(data, null, 2));

    let reply = "No response from AI";

     if (data.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0].content.parts;

      if (parts && parts.length > 0) {
        reply = parts.map(p => p.text).join("\n\n"); // ✅ main change
      }
    }
    return res.json({ reply });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      reply: "AI not working right now",
    });
  }
});

module.exports = router;