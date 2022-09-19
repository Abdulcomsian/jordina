import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import FormScreen from "./screens/FormScreen/form-screen";
import AppRoute from "./routes/index";
import { useState, Fragment } from "react";

const persistConfig = {
  key: "auth_data",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const authenticatedUser = localStorage.getItem("authenticatedUser");
console.log("App JS :", authenticatedUser, "dsdsad");
const persistor = persistStore(store);
function App() {
  const [isLogged, setIsLogged] = useState(authenticatedUser);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename={authenticatedUser ? "/Jordina" : ""}>
          {isLogged ? (
            <AppRoute />
          ) : (
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/appointment" element={<FormScreen />} />
              <Route exact path="Jordina/login" element={<Login />} />
              <Route exact path="Jordina/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
