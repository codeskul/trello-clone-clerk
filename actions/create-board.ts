"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import db from "@/db";
import { boards } from "@/db/schema/board";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z
    .string()
    .min(3, { message: "Minimum length of 3 letters is required" }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.insert(boards).values({ title: title });
  } catch (error) {
    return {
      message: "Database error",
    };
  }

  revalidatePath("/organization/org_2fGPceBS8z4RWEOlrR42N1hNlYh");
  redirect("/organization/org_2fGPceBS8z4RWEOlrR42N1hNlYh");
}
