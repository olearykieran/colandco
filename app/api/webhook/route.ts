import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as any;

  if (event.type === "checkout.session.completed") {
    // Create order in database
    await db.order.create({
      data: {
        userId: session.metadata.userId,
        total: session.amount_total / 100,
        status: "paid",
        items: {
          create: session.line_items.data.map((item: any) => ({
            productId: item.price.product,
            quantity: item.quantity,
            price: item.price.unit_amount / 100,
            variant: item.price.product_data.name,
          })),
        },
      },
    });
  }

  return new NextResponse(null, { status: 200 });
}