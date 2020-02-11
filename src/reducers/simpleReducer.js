export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return { result: action.payload }
    case 'SIMPLE_ACTION_SUCCESS':
      return { result: action.response }
    case 'SIMPLE_ACTION_FAILURE':
      return { result: action.error }
    default:
      return state
  }
}