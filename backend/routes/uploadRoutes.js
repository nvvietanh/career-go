const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");
const jwtAuth = require("../lib/jwtAuth");
const JobApplicant = require("../db/JobApplicant");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const upload = multer();

router.put("/resume", jwtAuth, (req, res) => {
  const user = req.user;
  const data = req.body;
  JobApplicant.findOne({ userId: user._id })
    .then((applicant) => {
      if (applicant == null) {
        res.status(404).json({
          message: "Người dùng không tồn tại",
        });
        return;
      }
      if (data.type == "resume" && data.content) {
        applicant.resume = data.content;
      }
      applicant.save()
        .then(() => {
          res.json({
            message: "Đã cập nhật Resume",
          });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/profile", jwtAuth, (req, res) => {
  const user = req.user;
  const data = req.body;
  JobApplicant.findOne({ userId: user._id })
    .then((applicant) => {
      if (applicant == null) {
        res.status(404).json({
          message: "Người dùng không tồn tại",
        });
        return;
      }
      if (data.type == "profile" && data.content) {
        applicant.profile = data.content;
      }
      applicant.save()
        .then(() => {
          res.json({
            message: "Đã cập nhật ảnh hồ sơ",
          });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
