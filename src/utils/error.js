export const sendError = (res, status, message, err = null) => {
  const response = { error: message };
  if (process.env.NODE_ENV !== 'production' && err) {
    response.details = err.message;
  }
  console.error(`Error: ${message}`, err ? err.stack : '');
  return res.status(status).json(response);
};
