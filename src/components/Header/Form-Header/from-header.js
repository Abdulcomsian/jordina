import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const FormHeader = () => {
  return (
    <div className="form_header">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Jordina</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
    </div>
  );
};
export default FormHeader;
