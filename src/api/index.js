const express = require('express');

const emojis = require('./emojis');
const courses = require('./courses');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/courses', courses);

module.exports = router;
