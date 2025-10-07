import React, {useEffect, useState, useContext} from "react";


//INTERNAL IMPORT
import { ChatAppContext } from "../Context/ChatAppContext";

const index = () => {
  const {title} = useContext(ChatAppContext);
  return <div>{title}</div>;
};

export default index;
