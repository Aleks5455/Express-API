const express = require("express");
const router = express.Router();
const multer = require("multer");
const { UserController, PostController } = require("../controllers");
const authenticateToken = require("../midleware/auth");

const uploadDestination = "uploads";

//File  storage show

const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

//User routes

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", authenticateToken, UserController.current);
router.get("/users/:id", authenticateToken, UserController.getUserById);
router.put("/users/:id", authenticateToken, UserController.updateUser);

//Post routes

router.post("/posts", authenticateToken, PostController.createPost);
router.delete("/posts/:id", authenticateToken, PostController.deletePost);
router.get("/posts/:id", authenticateToken, PostController.getPostById);
router.get("/posts", authenticateToken, PostController.getAllPosts);


module.exports = router;
