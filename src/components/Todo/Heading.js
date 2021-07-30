import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="row m-1 p-4">
      <div className="col">
        <div className="p-1 h1 todo-title text-center mx-auto display-inline-block">
          <i className=" fa fa-check text-white rounded p-2"></i>
          {heading}
        </div>
      </div>
    </div>
  );
};

export default Heading;
