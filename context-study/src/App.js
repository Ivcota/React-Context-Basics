import React from "react";
import Add from "./components/Add";
import Main from "./components/Main";
import GlobalState from "./context/GlobalState";

const App = (props) => {
  return (
    <GlobalState>
      <React.Fragment>
        <Main />
        <Add add="Add" />
      </React.Fragment>
    </GlobalState>
  );
};

export default App;
