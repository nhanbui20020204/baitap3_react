import React from "react";
import Header from "../componets/Header";
import Body from "../componets/Body";

Groups.propTypes = {};

function Groups(props) {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Groups;
