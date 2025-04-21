import { checkSession } from "../auth/actions";
import LoginForm from "./login-form";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  // Check session on the server side
  const session = await checkSession();

  // If user is already logged in, redirect to home
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <LoginForm />
    </div>
  );
}
