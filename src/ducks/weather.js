//actions
export const ADD = 'ADD';
export const MINUS = 'MINUS';

//reducer
export default function (state = 0, action) {
    switch (action.type) {
      case ADD:
        return state + 1
      case MINUS:
        return state - 1
      default:
        return state
    }
  }