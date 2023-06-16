import * as React from 'react';
export default interface UserData {
  id: number;
  name: string;
  role: string;
  gmail: string;
  select: null | boolean;
}
export interface UsersListProps {
  users: UserData[];
 }
export function UsersData({users}: UsersListProps): React.ReactElement {
  return(<>{
    users.map((user:UserData) => {
      return(
  <table>
  <tr>
    <td> {user.name}</td>
    <td> {user.role}</td>
    <td> {user.gmail}</td>
    <td><input type="checkbox" id="select"></input></td>
  </tr>
</table>)})};
</>
);
}