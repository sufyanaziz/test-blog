const errorMessage = errors => {
  console.log(errors);
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validLogin = (usrname, pwd) => {
  let errors = {};
  const username = usrname;
  const password = pwd;

  if (username.trim() === "") errors.username = "username is missing";
  if (password.trim() === "") errors.password = "password is empmissingty";

  return errorMessage(errors);
};

const validBlog = data => {
  let errors = {};
  const judul = data.judul;
  const content = data.content;

  if (judul.trim() === "") errors.judul = "judul is missing";
  if (content.trim() === "") errors.content = "content is missing";

  return errorMessage(errors);
};

module.exports = { validLogin, validBlog };
