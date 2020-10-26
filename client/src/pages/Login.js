import React, { useState, useEffect, useContext } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Context } from "../context/globalStorage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, []);

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const clickLoginUser = e => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    context.user.login(data);
  };

  return (
    <div className="login">
      <Paper className="login-paper">
        <div className="login-paper-header">
          <h2>Login To Blog</h2>
        </div>
        <div className="login-paper-main">
          <TextField
            className="input"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            value={username}
            onChange={handleChangeUsername}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="login-paper-action">
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={clickLoginUser}
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
