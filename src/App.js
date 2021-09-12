import { Provider } from "react-redux";
import "./App.css";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCream from "./components/HooksIceCream";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <HooksIceCream />
      </div>
    </Provider>
  );
}

export default App;
