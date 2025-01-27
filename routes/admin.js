const { Router } = require('express');
const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {
  res.json({ message: 'signup endpoint!' });
});
adminRouter.post('/signin', (req, res) => {
  res.json({ message: 'signin endpoint!' });
});
adminRouter.post('/course', (req, res) => {
  res.json({
    message: 'course endpoint!',
  });
});
adminRouter.put('/course', (req, res) => {
  res.json({
    message: 'course endpoint!',
  });
});
adminRouter.get('/course', (req, res) => {
  res.json({
    message: 'course endpoint!',
  });
});

module.exports = {
  adminRouter,
};
