import React from "react";

const UserInput = props => {
  return (
    <input
      type="number"
      placeholder="Enter the number your want to calculate"
      onChange={props.onInputChange}
    ></input>
  );
};

export default UserInput;
