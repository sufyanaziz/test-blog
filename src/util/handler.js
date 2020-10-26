const timestamp = new Date().getTime();

const successMessage = ({ res, msg, data, token }) => {
  return res.status(200).json({
    code: 200,
    message: msg,
    token,
    data,
    timestamp,
  });
};

const badRequestMessage = ({ res, error }) => {
  return res.status(400).json({
    code: 400,
    message: "Something went wrong - Bad Request",
    errors: error,
    timestamp,
  });
};

const unAuthMessage = res => {
  return res.status(401).json({
    code: 401,
    message: "Unauthorization!",
    timestamp,
  });
};

const notFoundMessage = ({ res, error }) => {
  return res.status(404).json({
    code: 404,
    message: "Something is missing!",
    errors: error,
    timestamp,
  });
};

const internalServerErrorMessage = ({ res, error }) => {
  return res.status(500).json({
    code: 500,
    message: "Something went wrong - Internal Server Error",
    errors: error,
    timestamp,
  });
};

module.exports = {
  successMessage,
  badRequestMessage,
  unAuthMessage,
  notFoundMessage,
  internalServerErrorMessage,
};
