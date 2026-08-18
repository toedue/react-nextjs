import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

 export const UserContext = React.createContext<string>("");
 export const ChannelContext = React.createContext<string>("")

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"abudy"}>
        <ChannelContext.Provider value={"mychannel"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
