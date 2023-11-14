import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const http = String('https://sore-pear-goose-wig.cyclic.app')

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, http}}>
      {children}
    </UserContext.Provider>
  );
}