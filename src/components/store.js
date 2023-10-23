import { createStore } from 'redux';

const initialState = {
  inputData: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_DATA':
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
