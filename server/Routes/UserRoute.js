import express from "express";
import {
    deleteUser,
    followUser,
    getAllUser,
    getUser,
    unFollowUser,
    updateUser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

// // For testing if the route works fine
// router.get('/', async(req, res) => {
//   res.send("UserRoute")
// })

router.get('/', getAllUser)
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, unFollowUser);

export { router as userRoute };
