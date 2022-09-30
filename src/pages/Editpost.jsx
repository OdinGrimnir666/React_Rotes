import { useParams } from "react-router-dom";

import React from "react";

const Editpost = () => {
  const { id } = useParams();
  return <div>Editpost {id}</div>;
};

export { Editpost };
