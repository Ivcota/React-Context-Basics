import React, { useContext } from "react";
import Main from "./components/Main";
import GlobalContext from "./context/globalContext";
import GlobalState from "./context/GlobalState";

const App = (props) => {
  return (
    <GlobalState>
      <React.Fragment>
        <Main />
      </React.Fragment>
    </GlobalState>
  );
};

export default App;

