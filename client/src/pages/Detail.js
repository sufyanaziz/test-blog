import Button from "@material-ui/core/Button";
import React, { useEffect, useContext } from "react";
import { Context } from "../context/globalStorage";

const Detail = props => {
  const id_blog = props.match.params.id;
  const context = useContext(Context);
  const { loading, getDetailBlog, content_detail } = context.blog;

  useEffect(() => {
    getDetailBlog(id_blog);
  }, []);

  const date = new Date(parseInt(content_detail.created_at)).getDate();
  const month = new Date(parseInt(content_detail.created_at)).getMonth() + 1;
  const year = new Date(parseInt(content_detail.created_at)).getFullYear();
  const fixDate = `${date}-${month}-${year}`;

  console.log(loading);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : content_detail ? (
        <>
          <Button
            onClick={() => props.history.goBack()}
            color="primary"
            className="btn-back"
          >
            Back
          </Button>
          <div className="detail">
            <div className="detail-header" style={{ padding: "0 20px" }}>
              <p style={{ marginBottom: "16px" }}>{fixDate}</p>
              <h4>{content_detail.judul}</h4>
            </div>
            <div className="detail-content">
              <p>{content_detail.content}</p>
            </div>
            <div className="detail-footer" style={{ marginTop: 10 }}>
              <h4 style={{ fontWeight: 400, color: "gray" }}>
                Author : {content_detail.username}
              </h4>
            </div>
          </div>
        </>
      ) : (
        <p>Data is not found</p>
      )}
    </>
  );
};

export default Detail;
