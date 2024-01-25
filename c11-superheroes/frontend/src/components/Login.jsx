import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const authContext = useContext(AuthContext);
  const { setUser } = authContext;

  const login = () => {
    setUser(username);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <h2>Input</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
