import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import MainRoute from "./routes/mainRoutes";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import FormScreen from "./components/FormScreen/form-screen";
import AppRoute from "./routes/index";

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
console.log("App JS :", authenticatedUser);
const persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename={authenticatedUser ? "/Jordina" : ""}>
          {authenticatedUser ? (
            <AppRoute />
          ) : (
            <Routes>
              <Route exact path="" element={<Home />} />
              <Route exact path="Jordina/appointment" element={<FormScreen />} />
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
