import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserData, { UsersData } from "./UserData";
export const users: UserData[] = [
  {
    id: 1,
    name: "user1",
    role: "Developer",
    gmail: "user1@everesr.com",
    select: null,
  },
  {
    id: 2,
    name: "user2",
    role: "Team lead",
    gmail: "user2@everesr.com",
    select: null,
  },
  {
    id: 1,
    name: "user3",
    role: "Developer",
    gmail: "user3@everesr.com",
    select: null,
  },
  {
    id: 1,
    name: "user4",
    role: "Developer",
    gmail: "user4@everesr.com",
    select: null,
  },
];
function App() {
  return (
    <section>
      <div className="App">
        <h1>Invite users</h1>
        <p>At least 1 member needs to be selected</p>
        <UsersData users={users} />
        <button id="cancel">Cancel</button>
        <button id="submit">Submit</button>
      </div>
    </section>
  )
}

export default App;
