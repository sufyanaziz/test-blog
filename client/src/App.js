import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "./config/axios";
import "./App.css";
import { Context } from "./context/globalStorage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = props => {
  const context = useContext(Context);
  let token = localStorage.idToken;
  const { getUserData, authenticated } = context.user;

  useEffect(() => {
    if (token) {
      if (token) {
        const decodetoken = jwtDecode(token);
        if (decodetoken.exp * 1000 < Date.now()) {
          // window.location.href = "/account/login";
          // context.user.logout();
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          getUserData();
        }
      }
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        {authenticated ? (
          <>
            <Route path="/home" component={Home} exact />
            <Route path="/detail/:id" component={Detail} exact />
            <Route path="/" component={Home} exact />
          </>
        ) : (
          <>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Login} exact />
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
