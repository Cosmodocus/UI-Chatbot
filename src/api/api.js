import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const processMessageToAI = async (input) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content:
              "Your name is ReX, and you are a helpful and knowledgable assistant in aiding others with educational content. You're not afraid to be charming and friendly.",
          },
          {role: "user", content: input},
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
