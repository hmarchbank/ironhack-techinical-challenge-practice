const router = require("express").Router();
const phones =  require('../data/phones.json')

router.get("/phones", (req, res, next) => {
    let pictures = []
    phones.forEach((el) => {
        pictures.push()
    })
  res.json(
      phones,
      
      );
});

router.get("/phones/:phoneId", (req, res, next) => {
    const phone = phones[req.params.phoneId]
    res.json(phone);
});

module.exports = router;

