const router = require("express").Router()
const { readFromFile } = require("../utils/fsHelper")

// GET Route for retrieving all the notes.
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json')
        .then((data) => {
            console.log(data);
            return res.json(JSON.parse(data))})
        .catch((err) => res.status(500).json(err));
  });


module.exports = router;