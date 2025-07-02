const express = require("express");
const sendEmail = require("../controller/emailController");
const emailRouter = express.Router();

emailRouter.post("/email", sendEmail);

module.exports = emailRouter;
