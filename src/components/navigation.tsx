import Link from "next/link";
import { FC } from "react";

export const Navigation: FC = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/users/Sasa">User</Link>
      </li>
    </ul>
  );
};
