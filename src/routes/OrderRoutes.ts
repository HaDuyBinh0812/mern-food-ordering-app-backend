import express from "express";
import { jwtCheck, jwtPare } from "../middleware/auth";
import OrderController from "../Controller/OrderController";

const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtPare,
  OrderController.createCheckoutSession
);

router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default router;
