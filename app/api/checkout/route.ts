import { currentUser } from "@clerk/nextjs/server";
import { createStripeSession } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const user = await currentUser();
    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { products } = body;

    if (!products || products.length === 0) {
      return new NextResponse("Products are required", { status: 400 });
    }

    const stripeSession = await createStripeSession(products, user.id);

    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    console.error("[CHECKOUT_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
