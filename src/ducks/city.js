//actions
export const SAN_FRANCISCO = 'SAN_FRANCISCO';
export const LOS_ANGELES = 'LOS_ANGELES';
export const SAN_DIEGO = 'SAN_DIEGO';
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