import * as types from '../constants/actionTypes'
import { userInfo } from 'os';
import io from "socket.io-client";

const initialState = {
  username: 'default',
  messages: [],
  socket: null,
}

const userInfoReducer = (state=initialState, action) => {
  const messages = state.messages;

  switch(action.type) {
    case types.INITIALIZE_SOCKET:
      return Object.assign(state, { socket: action.payload })

    case types.ADD_MESSAGE:
      messages.push(action.payload);
      return Object.assign(state, { messages } )

    case types.UPDATE_USERNAME:
      return Object.assign(state, { username: action.payload } )

    default:
      return state;
  }
}

export default userInfoReducer;