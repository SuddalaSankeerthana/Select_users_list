import * as React from "react";
import UserDataInterface, { UsersListInterface } from "./Interfaces";
export function UsersDataComponent({
  users,
}: UsersListInterface): React.ReactElement {
  return (
    <>
      {users.map((user: UserDataInterface) => {
        return (
          <table>
            <tr>
              <td> {user.name}</td>
              <td> {user.role}</td>
              <td> {user.gmail}</td>
              <td>
                <input type="checkbox" id="select"></input>
              </td>
            </tr>
          </table>
        );
      })}
      ;
    </>
  );
}
