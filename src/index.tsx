import ReactDOM from "react-dom/client";
import Main from "./containers/Main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Main />
  </Provider>,
);
