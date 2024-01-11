import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const http = String('https://sleepy-nightgown-yak.cyclic.app')//http://localhost:3000/  https://sleepy-nightgown-yak.cyclic.app

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, http}}>
      {children}
    </UserContext.Provider>
  );
}