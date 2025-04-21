import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST() {
  const cookieStore = cookies();
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const headersList = headers();
  const origin = headersList.get("origin") || "http://localhost:3000";
  return NextResponse.redirect(new URL("/login", origin), {
    status: 302,
  });
}
