export default (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN_ACTION_SUCCESS':
       // return { result: action.response }
        return Object.assign({}, { success:true,result: action.response} );
      case 'LOGIN_ACTION_FAILURE':
        return { result: action.error }
      default:
        return state
    }
  } 