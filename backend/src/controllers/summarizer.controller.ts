import { type Request, type Response } from "express";

const SYSTEM_PROMPT = `You summarize long emails into:
- 3 to 5 concise bullet points
- action items
- deadlines if present
- one-sentence summary of sender intent

Reply with JSON only (no markdown), in this shape:
{
  "summary": "...",
  "bullets": ["..."],
  "actionItems": ["..."],
  "deadlines": ["..."]
}`;

export const summarizerHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      res.status(400).json({
        error: "email field is required and must be a string",
      });
      return;
    }

    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      res.status(500).json({ error: "OPENAI_API_KEY is not configured" });
      return;
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: email },
          ],
          response_format: { type: "json_object" },
        }),
      },
    );

    if (!openaiResponse.ok) {
      const errBody = await openaiResponse.text();
      console.error("OpenAI error:", openaiResponse.status, errBody);
      res.status(500).json({ error: "Failed to get summary from OpenAI" });
      return;
    }

    const data = (await openaiResponse.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      res.status(500).json({ error: "OpenAI returned no content" });
      return;
    }

    const parsed = JSON.parse(content);
    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
