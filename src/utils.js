export const getError = (error) => {
  return error.response && error.responses.data.message
    ? error.response.data.message
    : error.message;
};
