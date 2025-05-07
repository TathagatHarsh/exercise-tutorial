import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => (
  <div className="flex items-center justify-center w-full">
    <InfinitySpin color="grey" />
  </div>
);

export default Loader;
