import React from 'react';
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

const LearnMore = ()=>{
    return(
        <Container fluid>
            <div className="content__div">
              <Row>
                <Col lg={12}>
                  
                    <h1>Want to learn more?</h1>
                    <p>If you’re still not sure and would like to learn more, sign up for our newsletter to get $10 off your <b>SkincareCo</b>. prescriptions.</p>
        
                </Col>
                <Col lg={12}>
                  <div className="form__div mt-5 m-auto">
                    <input className="form-control" placeholder="Your email"/>
                    <button>SUBSCRIBE</button>
                  </div>
                </Col>
              </Row>
              </div>
            </Container>
    )
}
export default LearnMore;