export const setInputData = (data) => {
  // console.log('setInputData action dispatched with value:', data);
    return {
      type: 'SET_INPUT_DATA',
      payload: data,
    };
  };
  