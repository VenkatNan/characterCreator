const router = require("express").Router();

router.get("/", function (req, res) {
  res.redirect('/characters')
});

module.exports = router;
