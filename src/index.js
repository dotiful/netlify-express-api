import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

// import models from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   };
//   next();
// });

// Routes
app.use('/magnet', routes.magnet);

// Start
app.listen(process.env.PORT, () =>
  console.log(`Local app listening on port ${process.env.PORT}!`),
);
