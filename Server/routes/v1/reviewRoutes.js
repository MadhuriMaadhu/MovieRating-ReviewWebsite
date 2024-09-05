import express from "express";
import userAuth from "../../middlewares/userAuth";
import { getAverageRating, getMovieReviews, addReview, deleteReview } from "../../controllers/reviewController";

const router = express.Router();

router.get("/avg-rating/:movieId", userAuth, getAverageRating);
router.get("/movie-review/:movieId", userAuth, getMovieReviews);
router.post("/add-review", userAuth, addReview);
router.put("/delete/:reviewId", userAuth, deleteReview);

module.exports = { reviewRouter: router };