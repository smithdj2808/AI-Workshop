"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/app/lib/supabase/server";

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function createTask(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const title = (formData.get("title") as string)?.trim();
  const courseName = (formData.get("courseName") as string)?.trim();

  if (!title || !courseName) {
    return;
  }

  await supabase.from("tasks").insert({
    user_id: user.id,
    title,
    course_name: courseName,
  });

  revalidatePath("/dashboard");
}

export async function toggleTask(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;
  const completed = formData.get("completed") === "true";

  await supabase.from("tasks").update({ completed: !completed }).eq("id", id);

  revalidatePath("/dashboard");
}

export async function deleteTask(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  await supabase.from("tasks").delete().eq("id", id);

  revalidatePath("/dashboard");
}
