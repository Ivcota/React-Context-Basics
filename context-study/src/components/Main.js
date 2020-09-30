import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";

const Main = (props) => {
  // Bring the useState() for the context into any of the components.
  const globalContext = useContext(GlobalContext);



  return (
    <div>
      <h1>Hello the count is: {globalContext.count} </h1>

    </div>
  );
};

export default Main;
