import React, { createContext, useState } from "react";
export const AuthContext = createContext();

//Alternate export
// const AuthContext = createContext();
// export const useAuth = useContext(AuthContext);

//Gets important from react; create the context
const AuthProvider = (props) => {
  const { children } = props;
  // console.log("AuthProviderChildren: ", children);
  const [user, setUser] = useState();
  const values = { user, setUser };
  console.log("AProvVals: ", values);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>; //Turns the wrapper into a provider itself
};

export default AuthProvider;
