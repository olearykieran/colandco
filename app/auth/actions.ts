import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function checkSession() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const cookie = await cookieStore.get(name);
          return cookie?.value;
        },
        async set(name: string, value: string, options: CookieOptions) {
          const { maxAge, ...cookieOptions } = options;
          await cookieStore.set({
            name,
            value,
            ...cookieOptions,
            ...(maxAge && { maxAge: maxAge * 1000 }),
          });
        },
        async remove(name: string, options: CookieOptions) {
          const { maxAge, ...cookieOptions } = options;
          await cookieStore.delete({
            name,
            ...cookieOptions,
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}
