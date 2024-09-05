import asyncHandler from 'express-async-handler';

export const handleError = asyncHandler(async (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Something went wrong, please try again";
  res.status(statusCode).json({ message });
});
