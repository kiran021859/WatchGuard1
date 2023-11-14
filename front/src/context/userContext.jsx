import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const http = String('http://localhost:4000')

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, http}}>
      {children}
    </UserContext.Provider>
  );
}