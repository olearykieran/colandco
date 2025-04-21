import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");

    if (!signature) {
      return new NextResponse("No signature found", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      // Handle successful payment
      console.log("Payment successful", session);
    }

    return new NextResponse(null, { status: 200 });
  } catch (error: any) {
    console.error("[WEBHOOK_ERROR]", error);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }
}
