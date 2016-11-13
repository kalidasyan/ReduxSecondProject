import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //ES6 Syntax, identical to: return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
      break;
    default:

  }
  return state;
}
