//actions
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

//reducer
export default function isAuthenticated (state = false, action) {
  if (action.type === IS_AUTHENTICATED) {
    return action.payload.value
  }
  return state
}

