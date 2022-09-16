import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../screens/Home/Home";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import { connect } from "react-redux";
import AppRoute from "./index";
import { BrowserRouter } from "react-router-dom";
import FormScreen from "../screens/FormScreen/form-screen";

function MainRoute(props) {
  const { authenticated } = props;
  console.log("Main Route :", authenticated);
  return (
    <BrowserRouter basename={authenticated ? "/Jordina" : ""}>
      {authenticated ? (
        <AppRoute />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="Jordina/appointment" element={<FormScreen />} /> */}
          <Route exact path="Jordina/login" element={<Login />} />
          <Route exact path="Jordina/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MainRoute);
