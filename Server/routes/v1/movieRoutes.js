import upload from "../../middlewares/multer";
import adminAuth from "../../middlewares/adminAuth";
import { createMovie, updateMovie, deleteMovie, getMovies, getMovieDetails} from "../../controllers/movieController";


const router = express.Router();
router.get("/movie-list", getMovies);
router.get("/details/:movieId", getMovieDetails);
router.post("/create", adminAuth, upload.single("image"), createMovie);
router.put("/update/:movieId", adminAuth, upload.single("image"), updateMovie);
router.delete("/delete/:movieId", adminAuth, deleteMovie);

module.exports = { movieRouter: router };