/**
 * Reducer function to mutate context state
 * @param {any} state Current state
 * @param {any} action Reducer action type and payload
 */
const Reducer = (state, action) => {
  // console.log('Reducer: action type......', action.type);
  // console.log('Reducer: action payload...', action.payload);
  switch (action.type) {
    case 'THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      throw new Error(`Reducer action type not defined: ${action.type}`);
  }
};

export default Reducer;