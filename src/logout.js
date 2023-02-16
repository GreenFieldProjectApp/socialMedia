const express = require("express");
const router = express.Router();

router.post("/logout", async (req, res) => {
    try {
      res.status(200).json(" to the next login !");
        }catch (err) {
        return res.sendStatus(400);
      }
  })
  module.exports = router;