import "./App.css";
import { UsersDataComponent } from "./UserDataComponet";
import { users } from "./Data";
function App() {
  return (
    <section>
      <div className="App">
        <h1>Invite users</h1>
        <p>At least 1 member needs to be selected</p>
        <UsersDataComponent users={users} />
        <button id="cancel">Cancel</button>
        <button id="submit">Submit</button>
      </div>
    </section>
  )
}

export default App;
