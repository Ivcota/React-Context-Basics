import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import GlobalReducer from "./globalReducer";
import { INCREMENT } from "./Types";

const GlobalState = (props) => {
  // Base State
  const initialState = {
    count: 0,
  };

  // Reducer or useState for the context
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // Listening Functions
  const addOne = () => {
    dispatch({
      type: INCREMENT,
      payload: state.count,
    });
  };

  const minOne = () => {
    dispatch({
      type: "DECREMENT",
      payload: state.count,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        // This state is coming from the useReducer
        count: state.count,
        addOne,
        minOne,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
