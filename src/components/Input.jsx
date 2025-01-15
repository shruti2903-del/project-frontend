import React from "react";

export default function Input({type, name, ...props}) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type={type}
          placeholder={props.placeholder}
          name={name}
          id={props.id}
          className="form-control"
          {...props}

         
        ></input>
      </div>
    </>
  );
}
