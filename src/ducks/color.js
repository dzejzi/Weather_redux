//actions
export const RED = 'RED';
export const GREEN = 'GREEN';
export const CHANGE_COLOR = 'CHANGE_COLOR';

//reducer
export default function (state = 0, action) {
    switch (action.type) {
      case CHANGE_COLOR:
        return action.payload.value
      default:
        return state
    }
  }