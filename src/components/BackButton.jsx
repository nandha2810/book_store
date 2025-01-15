import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="text-white bg-sky-800 rounded-lg px-4 py-1 w-fit"
      >
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default BackButton;
