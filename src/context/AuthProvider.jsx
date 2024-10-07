import { createContext, useContext, useEffect, useState } from "react";
import users from "../const/users";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const foundUser = users.find(
      (user) => user.login === login && user.password === password
    );

    if (foundUser) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [login, password]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, setLogin, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
