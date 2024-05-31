import express from "express";
import multer from "multer";
import MyRestaurantController from "../Controller/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurant } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

//PATCH /a
router.patch(
  "/order/:orderId/status",
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateOrderStatus
);

// GET /api/my/restaurant/order
router.get(
  "/order",
  jwtCheck,
  jwtParse,
  MyRestaurantController.getMyRestaurantOrders
);

//GET /api/my/restaurant
router.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

//POST /api/my/restaurant
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurant,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant
);

//PUT /api/my/restaurant
router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurant,
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateMyRestaurant
);

export default router;
