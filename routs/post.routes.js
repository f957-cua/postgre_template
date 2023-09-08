import Router from "express";
import postController from "../controllers/post.controller.js";

const router = new Router();

router.post("/post", postController.createPost);
router.get("/post", postController.getPostByUser);

export default router;
