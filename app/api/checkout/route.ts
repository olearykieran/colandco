import { NextResponse } from "next/server";
import { auth } from "@/lib/auth.config";
import { createStripeSession } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { items } = body;

    if (!items?.length) {
      return new NextResponse("Items are required", { status: 400 });
    }

    const stripeSession = await createStripeSession(items, session.user.id);

    return NextResponse.json({ sessionId: stripeSession.id });
  } catch (error) {
    console.error("[CHECKOUT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}