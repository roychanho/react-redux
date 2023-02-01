import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";
import Profile from "./components/Profile";
import userSlice from "./store/userSlice";

//store
const store = configureStore({
  reducer: {
    //key : value
    user: userSlice,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
