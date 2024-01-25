import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

//Same as const BlueBackground = (props)=>{
// const {children,color,name} = props
// Grabs the children, color and name from the props given into the thing
const BlueBackground = (props) => {
  console.log("props", props);
  const { children, bold } = props;
  const [user, setUser] = useState();
  const values = { user, setUser };
  console.log("BlueVals:", values);
  console.log("this is children", children);

  const authContext = useContext(AuthContext);
  console.log("BlueAuthContext", authContext);
  return (
    <div style={{ fontWeight: bold ? "bold" : "normal", background: "blue" }}>
      {children}
    </div>
  );
};

export default BlueBackground;
