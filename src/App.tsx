import "./App.css";
import {
  UsersDataComponentOnAdd,
  UsersDataComponentOnSubmit,
} from "./UserDataComponet";
import { users } from "./Data";
import { useState } from "react";
import UserDataInterface from "./Interfaces";
function App() {
  const [add, setAdd] = useState(false);
  const [submit, setSubmit] = useState(false);
  const userdata = users.filter((ele) => ele.select === true);
  const [userData, setUserData] = useState(userdata);
  const addedList = () => {
    setUserData(userData.filter((ele) => ele.select === true));
    console.log(userData);
  };
  const clickHandler = (id: number) => {
    users.filter((ele) => {
      if (ele.id === id) {
        return (ele.select = !ele.select);
      }
    });
    console.log(users);
  };
  return (
    <section>
      <div className="App">
        <h1>Invite users</h1>
        <button
          id="Add"></button>
          </div>
         </section> )

export default App;
