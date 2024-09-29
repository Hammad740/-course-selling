const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const { configDotenv } = require('dotenv');
configDotenv();
const PORT = process.env.PORT || 5000;

////// middleware
app.use(cors());
app.use(express.json());
app.use('dev');

app.post('/user/signup', (req, res) => {
  res.json({ message: 'signup endpoint!' });
});

app.post('user/signin', (req, res) => {
  res.json({
    message: 'signin endpoint!',
  });
});

app.get('user/purchases', (req, res) => {
  res.json({
    message: 'purchases endpoint! ',
  });
});

app.post('/course/purchase', (req, res) => {
  res.json({
    message: 'course purchase endpoint',
  });
});
app.get('/courses', (req, res) => {
  res.json({ message: 'courses endpoint!' });
});

app.listen(PORT, () => {
  console.log(colors.bgBlue(`Server is listening on ${PORT}.....`).italic);
});
