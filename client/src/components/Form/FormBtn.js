import React from "react";
import "./form.css";

 const FormBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-danger">
    {props.children}
    Search
  </button>;

export default FormBtn;