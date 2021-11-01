import { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import { initialUse, getLocalStorage } from '../services/Storage';

// App initial use
initialUse();

// Context initial data
const data = {
  theme: getLocalStorage('settings').data.theme,
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