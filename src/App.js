import { Provider } from "react-redux";
import "./App.css";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import HooksIceCream from "./components/HooksIceCream";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <NewCakeContainer />
        <HooksCakeContainer />
        <HooksIceCream />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
