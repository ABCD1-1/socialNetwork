const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const fileUpload = require("express-fileupload");
const {
  fileExtLimiter,
  fileMaxSize,
  filesAcceptOne,
} = require("../utils/errors.utils");

router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user display: 'block'

router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow); //patch : to update the array inside a user
router.patch("/unfollow/:id", userController.unfollow);

//upload

router.post(
  "/upload",
  fileUpload({ createParentPath: true }),
  filesAcceptOne,
  fileMaxSize,
  fileExtLimiter,
  uploadController.uploadProfil
);

module.exports = router;
