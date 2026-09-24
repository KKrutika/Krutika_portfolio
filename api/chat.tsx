import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        error: "Invalid messages",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
You are the AI project assistant for Krutika Koshti's professional portfolio.

Your job is to help visitors understand Krutika's work and collect project requirements.

Krutika is a frontend developer with experience in:
- Angular
- React
- JavaScript
- TypeScript
- HTML
- CSS
- Angular Material
- Responsive web development
- Enterprise web applications

Be friendly, concise and professional.

When someone wants to start a project, help collect:
1. Their name
2. What they want to build
3. Type of project
4. Preferred technology, if known
5. Timeline
6. Budget, if they want to share it
7. Email address

Do not invent projects, clients, experience, pricing or technologies that are not provided.

If someone asks how to contact Krutika, explain that they can submit their details through this assistant.

Ask only one or two questions at a time.

Do not claim that you are Krutika.
      `,
      input: messages,
    });

    return res.status(200).json({
      message: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}