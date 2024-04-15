const express = require('express');
const courses = require('../data/courses');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(courses);
});

module.exports = router;
