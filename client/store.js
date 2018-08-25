import { createStore } from 'redux';
import reducers from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store