const express = require("express");
const router = express();
const formUpload = require("../helpers/formUpload");

const usersController = require("../controllers/users.controller");
// const verifyToken = require("../helpers/verifyToken");

router.get("/", usersController.get);
router.get("/:id", usersController.getDetail);
// router.post("/", usersController.add);
router.post("/", formUpload.single("avatar"), usersController.add);
router.patch(
  "/:id",
  formUpload.single("avatar"),
  usersController.updateByPatch
);
router.delete("/:id", usersController.remove);

module.exports = router;
