import UserDataInterface from "./Interfaces";
import React, { useState } from "react";
export default function UsersDataComponentOnSubmit({
  user,
}: {
  user: UserDataInterface;
}): React.ReactElement {
  const [select, setSelect] = useState(user.select);
  return (
    <table>
      <tr>
        <td> {user.name}</td>
        <td> {user.role}</td>
        <td> {user.gmail}</td>
      </tr>
    </table>
  );
}
