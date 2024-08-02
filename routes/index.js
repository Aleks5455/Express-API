const express = require("express");
const router = express.Router();
const multer = require("multer");
const { UserController } = require("../controllers");
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

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", authenticateToken, UserController.current);
router.get("/users/:id", authenticateToken, UserController.getUserById);
router.put("/users/:id", authenticateToken, UserController.updateUser);

module.exports = router;
