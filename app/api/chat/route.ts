import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: google("gemini-2.0-flash-exp"),
    messages,
    system: `You are a helpful meal planning assistant. When users provide:
    - Number of recipes they want
    - Types of recipes or ingredients they prefer
    - Any allergies or dietary restrictions
    
    Generate detailed meal plans with ingredients and cooking instructions. 
    Be specific about portions, cooking times, and preparation steps.
    Always consider the allergies and dietary restrictions mentioned.`,
  })

  return result.toDataStreamResponse()
}
