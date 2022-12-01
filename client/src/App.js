import { Box } from "@mui/material";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from "react-cookie";
// import UserNameInLogin from "./Context/userNameinLogin";
import { createContext, useState } from "react";

function App() {
  const UserNameInLogin = createContext();

  const [userName, setUserName] = useState({
    login: true,
    username: userdata.username,
  });

  return (
    <>
      <UserNameInLogin value={{login,username}}>
        <CookiesProvider>
          <div className="App">
            <Header />
            <Box style={{ marginTop: "64px" }}>
              <Home />
            </Box>
          </div>
        </CookiesProvider>
      </UserNameInLogin>
    </>
  );
}

export default App;
