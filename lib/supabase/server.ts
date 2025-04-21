import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          const { maxAge, ...cookieOptions } = options;
          cookieStore.set({
            name,
            value,
            ...cookieOptions,
            ...(maxAge && { maxAge: maxAge * 1000 }),
          });
        },
        remove(name: string, options: CookieOptions) {
          const { maxAge, ...cookieOptions } = options;
          cookieStore.delete({
            name,
            ...cookieOptions,
          });
        },
      },
    }
  );
};
