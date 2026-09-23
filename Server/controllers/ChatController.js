import fetch from "node-fetch";

export const chatBot = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful learning assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    res.json({
      reply: data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "Chatbot error" });
  }
};