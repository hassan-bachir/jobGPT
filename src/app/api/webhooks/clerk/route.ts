import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const event = await verifyWebhook(request);
  } catch {
    return new Response("Invalid webhook", { status: 400 });
  }
}
