import React from "react";

import { useSelector } from "react-redux";
import { selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  return <div>{count}</div>;
};

export default Counter;
