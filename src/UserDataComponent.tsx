import React from "react";
import UserDataInterface from "./Interfaces";
type UserProps = {
  user: UserDataInterface;
  clickHandler: () => void;
};
export function UsersDataComponentOnAdd({
  user,
  clickHandler,
}: UserProps): React.ReactElement {
  return (
      <table>
        <tr>
          <td> {user.name}</td>
          <td> {user.role}</td>
          <td> {user.gmail}</td>
          <td>
            <input type="checkbox" id="select" onChange={clickHandler}></input>
          </td>
        </tr>
      </table>
  );
}
export function UsersDataComponentOnSubmit({
  user,
}: {
  user: UserDataInterface;
}): React.ReactElement {
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