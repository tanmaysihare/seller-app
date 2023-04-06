import React from "react";
import './Input.css';


const Input = (props) => {
  return (
    <div className="control">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
