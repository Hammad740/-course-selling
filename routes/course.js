const { Router } = require('express');
const courseRouter = Router();

courseRouter.get('/courses', (req, res) => {
  res.send('hello');
});

module.exports = {
  courseRouter,
};
