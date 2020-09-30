import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";

const Add = (props) => {
  const globalContext = useContext(GlobalContext);

  // Trigger Function for Count
  const addOne = () => {
    globalContext.addOne();
  };

  const minOne = () => {
    globalContext.minOne();
  };
  return (
    <div>
      <button onClick={addOne}>{props.add}</button>
      <button onClick={minOne}>Decrement</button>
    </div>
  );
};

export default Add;
