import React from "react";
import DisplayDessertsDropdown from "./DisplayDessertsDropdown";

const UpdateDessert = ({ desserts }) => {
  return (
    <div>
      <DisplayDessertsDropdown desserts={desserts} fetchRequest={"update"} />
    </div>
  );
};

export default UpdateDessert;
