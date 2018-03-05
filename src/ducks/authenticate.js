//actions
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

//reducer
export default function isAuthenticated (state = false, action) {
  if (action.type === IS_AUTHENTICATED) {
    return action.payload.value
  }
  return state

}

  /*
   const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    }
    ,
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
*/
//export default fakeAuth
