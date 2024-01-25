import React, { useContext } from "react";
import BlueBackground from "./BlueBackground";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { setUser, user } = authContext;
  const logout = () => setUser(null);
  return (
    <BlueBackground bold={false}>
      <div>{user && <button onClick={logout}>logout</button>}</div>
      <h1>Superheroes Registry</h1>;<h5>2023 Edition</h5>
    </BlueBackground>
  );
};

export default Header;
