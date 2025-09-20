import nodemailer from "nodemailer";
import { EMAIL_PASS } from "./env.js";

export const accEmail = "vdk0987@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accEmail,
    pass: EMAIL_PASS,
  },
});

export default transporter;
