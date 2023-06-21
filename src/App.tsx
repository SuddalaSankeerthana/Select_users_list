import React from "react";
import "./App.css";
import {
  UsersDataComponentOnAdd,
  UsersDataComponentOnSubmit,
} from "./UserDataComponent";
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
  };
  const clickHandler = (id: number) => {
    users.filter((ele) => {
      if (ele.id === id) {
        return (ele.select = !ele.select);
      }
    });
  };
  return (
    <section>
      <div className="App">
        <div className="header">
        <h1>Invite users</h1>
        <button
          id="Add"
          onClick={() => {
            setSubmit(false), setAdd(true);
          }}
        >
          Add
        </button></div>
        {add && (
          <>
          <p>Atleast one User need to be selected</p>
         <b><p>Onboard Users</p></b>
            {users.map((user: UserDataInterface) => (
              <div key={user.id}>
                <UsersDataComponentOnAdd
                  user={user}
                  clickHandler={() => clickHandler(user.id)}
                ></UsersDataComponentOnAdd>
              </div>
            ))}
            <button id="cancel">Cancel</button>
            <button
              id="submit"
              onClick={() => {
                addedList();
                setSubmit(true);
                setAdd(false);
              }}
            >
              Submit
            </button>
          </>
        )}
        {submit && (
          <>
            <p>
              <b>
                <p>Users</p>
              </b>
              {userdata.map((user: UserDataInterface) => (
                <div key={user.id}>
                  <UsersDataComponentOnSubmit
                    user={user}
                  ></UsersDataComponentOnSubmit>
                </div>
              ))}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
export default App;
