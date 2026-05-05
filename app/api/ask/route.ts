import Anthropic from "@anthropic-ai/sdk";
import { PROFILE_CONTEXT } from "@/content/context";

const client = new Anthropic();

export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    if (!question?.trim()) {
      return Response.json({ error: "No question provided" }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: `You are an AI assistant on Sukriti Dubey's portfolio website. Answer questions about her background, skills, and experience based only on the context below. Be specific, grounded, and conversational. Never fabricate. If something isn't in the context, say so.\n\nCONTEXT:\n${PROFILE_CONTEXT}\n\nQUESTION: ${question}`,
        },
      ],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";
    return Response.json({ answer: text });
  } catch (err) {
    console.error("/api/ask error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
