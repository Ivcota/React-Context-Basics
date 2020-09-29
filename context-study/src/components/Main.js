import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import GlobalState from "../context/GlobalState";

const Main = (props) => {
  // Bring the useState() for the context into any of the components.
  const globalContext = useContext(GlobalContext);

  // Trigger Function for Count
  const addOne = () => {
    globalContext.addOne();
  };

  return (
    <div>
      <h1>Hello the count is: {globalContext.count} </h1>
      <button onClick={addOne}>Increment</button>
    </div>
  );
};

export default Main;
