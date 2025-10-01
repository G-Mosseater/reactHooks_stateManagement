import { useState, useEffect } from "react";

//shared variables across the whole application, must be defined outside the useStore hook
let globalState = {};

let listeners = [];

let actions = {};

//By default, components subscribe to changes (shouldListen = true).
// If you pass false, the component will not re-render when global state updates.
export function useStore(shouldListen = true) {
  const setState = useState(globalState)[1];

  //updates the state
  function dispatch(actionIdentifier, payload) {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  }

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState); //keep all listeners that are not in the state
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
}

// creates slices of the global state

export function initStore(userActions, initialState) {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
}




//https://www.npmjs.com/package/use-global-hook