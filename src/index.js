import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import serverless from "serverless-http";

// import models from './models';
import routes from './routes';

const app = express();
const router = express.Router();
const path = require('path');

// Application-Level Middleware

app.use(cors());

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express!</h1>');
  res.end();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.use('/.netlify/functions/api', router);  // path must route to lambda

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

module.exports.handler = serverless(app);
