const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = async (req, resp) => {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    console.log(process.env.MAIL_NAME);
    if (!name || !email || !message) {
      return resp.status(400).json({
        message: "All the fields are mandatory",
        success: true,
      });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "recipient@example.com",
      subject: `New Message from ${name}`,
    });

    return resp.status(200).json({
      message: "Email sent",
      success: true,
    });
  } catch (error) {
    return resp.status(500).json({
      message: error.message || error,
      success: false,
    });
  }
};

module.exports = sendEmail;
