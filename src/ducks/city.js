//actions
export const CHANGE_CITY = 'CHANGE_CITY';

//reducer
export default function (state = 0, action) {
    switch (action.type) {
      case CHANGE_CITY:
        return action.payload.value
      default:
        return state
    }
  }