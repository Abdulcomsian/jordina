import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Loader = () => {
console.log("hello")
  const [fullscreen, setFullscreen] = useState(true);
  return (
    <h2>Hello</h2>
    // <Modal show={show} fullscreen={fullscreen} onHide={onHide}/>
  )
  
};
export default Loader;
