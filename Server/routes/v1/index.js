import express from 'express';
import userRouter from './userRoutes';
import adminRouter from './adminRoutes';
import movieRouter from './movieRoutes';
import reviewRouter from './reviewRoutes';

const v1Router = express.Router();

v1Router.use('/user', userRouter);
v1Router.use('/admin', adminRouter);
v1Router.use('/movie', movieRouter);
v1Router.use('/review', reviewRouter);

export default v1Router;