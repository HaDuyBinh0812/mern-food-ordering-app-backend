import express from "express";
import MyUserController from "../Controller/MyUserController";
import { jwtCheck, jwtPare } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

//  /api/my/user
router.get("/", jwtCheck, jwtPare, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtPare,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
