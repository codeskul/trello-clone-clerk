import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import db from "@/db";
import { boards } from "@/db/schema/board";
import { Board } from "./board";
import { Form } from "./form";

export default async function OrganizationIdPage() {
  const boardsList = await db.select().from(boards);
  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boardsList.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
}
