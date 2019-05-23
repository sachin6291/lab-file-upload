const express = require("express");
const passport = require("passport");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const cloudinaryConfig = require("../config/cloudinary.config");
const Yolo = require("../models/yolo");
const upload = require("multer");

router.get("/add", ensureLoggedIn("/login"), (req, res) => {
  console.log(req.user);
  res.render("authentication/post-add", { post: req.user });
});
router.post("/add", cloudinaryConfig.single("photo"), (req, res) => {
  const content = req.body.content;
  const imgName = req.file.originalname;
  const imgPath = req.file.url;
  newPost = new Yolo({ content, imgName, imgPath });
  newPost
    .save()
    .then(x => res.redirect("/"))
    .catch(err => console.log("Error!:", err));
});
module.exports = router;
