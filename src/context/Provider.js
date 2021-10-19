import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const data = {
  theme: 'light',
};

export const context = createContext(data);

const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, data);
  return (
    <context.Provider value={[state, dispatch]}>
      {props.children}
    </context.Provider>
  );
};

export default Provider;