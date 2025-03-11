import { MouseEventHandler } from "react";
import { User } from "../_lib/user";

export default function Tile({
  onClick,
  user,
}: {
  onClick: MouseEventHandler;
  user: User;
}) {
  return (
    <td
      className="bg-base-200 divide-primary text-primary h-60 w-60 border-5 text-center text-4xl font-extrabold"
      onClick={onClick}
    >
      {user}
    </td>
  );
}
