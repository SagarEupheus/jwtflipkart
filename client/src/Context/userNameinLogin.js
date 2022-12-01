import {  createContext, useState } from "react";

export const DataContext = createContext(null);

const UserNameInLogin = ({children}) => {
  const [iconss, setIconsToggle] = useState(false);

  return (
    <UserNameInLogin.Provider
      value={{
        userName,
        setIconsToggle,
      }}>
        {children}
    </UserNameInLogin.Provider>
  );
};


export default UserNameInLogin;