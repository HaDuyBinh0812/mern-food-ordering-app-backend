import express from "express";
import { param } from "express-validator";
import RestaurantController from "../Controller/RestaurantController";

const router = express.Router();

router.get(
  "/:restaurantId",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId  paramenter must be  a valid string"),
  RestaurantController.getRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be  a valid string"),
  RestaurantController.searchRestaurant
);

export default router;
