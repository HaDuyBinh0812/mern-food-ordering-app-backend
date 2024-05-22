import express from "express";
import multer from "multer";
import MyRestaurantController from "../Controller/MyRestaurantController";
import { jwtCheck, jwtPare } from "../middleware/auth";
import { validateMyRestaurant } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

//GET /api/my/restaurant
router.get("/", jwtCheck, jwtPare, MyRestaurantController.getMyRestaurant);

//POST /api/my/restaurant
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurant,
  jwtCheck,
  jwtPare,
  MyRestaurantController.createMyRestaurant
);

//PUT /api/my/restaurant
router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurant,
  jwtCheck,
  jwtPare,
  MyRestaurantController.updateMyRestaurant
);

export default router;
