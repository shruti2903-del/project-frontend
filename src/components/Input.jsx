import React from "react";

export default function Input(props) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          className="form-control"
          required
        ></input>
      </div>
    </>
  );
}
