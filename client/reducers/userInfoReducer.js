import * as types from '../constants/actionTypes'
import { userInfo } from 'os';

const initialState = {
  username: 'default',
  messages: []
}

const userInfoReducer = (state=initialState, action) => {
  console.log(state);
  const user = state.user;
  const messages = state.messages;

  switch(action.type) {
    case types.ADD_MESSAGE:
      messages.push(message);
      return {
        ...state,
        messages
      }

    default:
      return state;
  }
}

export default userInfoReducer;