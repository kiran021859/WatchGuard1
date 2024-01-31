import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext({});



export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [pageName, setPageName] = useState('');

  const http = String('http://localhost:4000/api/v1/tasks')//http://localhost:4000/api/v1/tasks  https://sleepy-nightgown-yak.cyclic.app

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, http, pageName, setPageName}}>
      {children}
    </UserContext.Provider>
  );
}