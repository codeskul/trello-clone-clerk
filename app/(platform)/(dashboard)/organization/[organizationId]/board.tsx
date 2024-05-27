import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDelete } from "./form-delete";

interface BoardProp {
  id: string;
  title: string;
}

export const Board = ({ title, id }: BoardProp) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board name: {title}</p>
      <FormDelete />
    </form>
  );
};
