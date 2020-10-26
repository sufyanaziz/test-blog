import React, { useContext, useEffect, useState } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Context } from "../context/globalStorage";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import DialogAdd from "../components/dialog/Dialog_Add";
import Dialog_Alert from "../components/dialog/Dialog_Alert";

const Home = props => {
  const context = useContext(Context);
  const { name } = context.user.user_details;
  const { getDataBlog } = context.blog;
  const { logout } = context.user;

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  dayjs.extend(relativeTime);

  useEffect(() => {
    getDataBlog();
  }, []);

  let modal = (
    <DialogAdd
      open={open}
      handleClose={handleClose}
      setOpen={setOpen}
      setOpenAlert={setOpenAlert}
    />
  );

  let modal_alert = (
    <Dialog_Alert
      open={openAlert}
      handleClose={handleCloseAlert}
      title="Data berhasil ditambahkan"
    />
  );

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome Back {name}</h1>
        <h2>To Blogkita.com</h2>
      </div>
      <div className="home-content">
        <div className="home-content-act">
          <p>Our Post</p>
          <div>
            <Button
              onClick={handleClickOpen}
              className="button"
              variant="contained"
              color="primary"
              style={{ marginRight: 10 }}
            >
              Add New Post
            </Button>
            <Button
              onClick={() => logout(props.history)}
              className="button"
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="home-content-main">
          {context.blog.loading ? (
            <p>Loading...</p>
          ) : (
            context.blog.content.map((data, index) => {
              const date = new Date(parseInt(data.created_at)).getDate();
              const month = new Date(parseInt(data.created_at)).getMonth() + 1;
              const year = new Date(parseInt(data.created_at)).getFullYear();
              const fixDate = `${date}-${month}-${year}`;
              return (
                <Link to={`/detail/${data.id_blog}`} key={index}>
                  <Card className="card">
                    <div className="card-header">
                      <h1>{index + 1}</h1>
                    </div>
                    <div className="card-content">
                      <p>{fixDate}</p>
                      <p>{data.judul}</p>
                      <p>{data.content}</p>
                      <p>Author : {data.username}</p>
                    </div>
                  </Card>
                </Link>
              );
            })
          )}
        </div>
      </div>
      {modal}
      {modal_alert}
    </div>
  );
};

export default Home;
