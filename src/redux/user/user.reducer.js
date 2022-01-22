const INITIAL_VALUE = {
  currentUser: null,
};

const userReducer = (oldState = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...oldState,
        currentUser: action.payload,
      };
    default:
      return oldState;
  }
};

export default userReducer;
