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
  const[disble,setDisable]=useState(false)
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
     setDisable(true);
  };
  return (
    <section>
      <div className="App">
        <h1>Invite users</h1>
        <button
          id="Add"
          onClick={() => {
            setSubmit(false), setAdd(true), setDisable(false);
          }}
        >Add</button>
        {add && <RenderData></RenderData>}
        {submit && (
          <>
            <p> <b><p>Users</p></b>
              {userdata.map((user: UserDataInterface) => (
                <UsersDataComponentOnSubmit
                  user={user}
                ></UsersDataComponentOnSubmit>
              ))}
            </p>
          </>
        )}
      </div>
    </section>
  );
  function RenderData() {
    return (
      <>
        {users.map((user: UserDataInterface) => (
          <UsersDataComponentOnAdd
            user={user}
            clickHandler={() => clickHandler(user.id)}
          ></UsersDataComponentOnAdd>
        ))}
        <button id="cancel">Cancel</button>
        <button
          id="submit"
          onClick={() => {
            addedList();
            setSubmit(true);
            setAdd(false);
          }}
          disabled={disble}
        >
          Submit
        </button>
      </>
    );
  }
}
export default App;
