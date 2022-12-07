import React,{useState, useEffect} from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { connect } from "react-redux";
import { logout } from "../../../redux/action/authAction";
import Loader from "../../Loader/index";
import { useNavigate } from "react-router-dom";

const FormHeader = (props) => {
  const { authenticated, token, statusLogout, className, addedItems, removeProductFlag } = props;
  const [loader, showLoader] = useState(false);
  const navigate = useNavigate();
  const logOutUser = async (type, e) => {
    try {
      showLoader(true);
      var response=await props.logoutHandler(token);
      if(response.status==200){
        setTimeout(() => {
       
        showLoader(true);
        navigate('/Jordina');
        }, 2000);
        
      }
    } catch (error) {
      showLoader(false);
    }
  };
  return (
    <>
       {loader && <Loader showLoader={loader} loaderColor={"#AF6FAC"} />}
       <div className="form_header">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/Jordina">Jordina</Navbar.Brand>
          {token && (
          <a className="logout-text" onClick={logOutUser}>
            Logout
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
          )}
        </Container>
      </Navbar>
    </div>
    </>
    
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  authenticated: state.auth.authenticated,
  statusLogout: state.auth.statusLogout,
});

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: (token) => dispatch(logout(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormHeader);

