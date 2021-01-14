import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/task";

const store = createStore(rootReducer, composeWithDevTools());

const ReduxWrapper: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxWrapper;
