"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";

export type SignupState = { error: string | null };

export async function signup(
  _prevState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect("/dashboard");
}
