export const notFoundError = (req, res, next) => {
  const error = new Error('Not Found');
  next({
    error
  })
}


export const errorHandler = (error, req, res, next) => {
  return res.status(error.status || 500).json({
    message: error.message,
    status: error.status,
    stack: error.stack
  })
}