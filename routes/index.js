const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadDestination = "uploads";

//File  storage show
const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/register", (req, res) => {
  res.send("Res");
});

module.exports = router;
