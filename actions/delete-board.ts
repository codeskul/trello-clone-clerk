"use server";

import db from "@/db";
import { boards } from "@/db/schema/board";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string) {
  await db.delete(boards).where(eq(boards.id, id));
  revalidatePath("/organization/org_2fGPceBS8z4RWEOlrR42N1hNlYh");
}
