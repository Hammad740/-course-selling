const express = require('express');
const app = express();
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const { userRouter } = require('./routes/user.js');
const { courseRouter } = require('./routes/course.js');
const { adminRouter } = require('./routes/admin.js');
const PORT = 3000;

//// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(
    colors.bgMagenta(`Server is listening on ${PORT}...`).italic.black
  );
});
