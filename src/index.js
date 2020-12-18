import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import serverless from "serverless-http";

const app = express();
const router = express.Router();

import routes from './routes';

// Application-Level Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express!</h1>');
//   res.end();
// });

// Routes
app.use('/.netlify/functions/index', router);  // path must route to lambda
app.use('/magnet', routes.magnet);
app.use('/', router);

// Start
app.listen(process.env.PORT, () =>
  console.log(`Local app listening on port ${process.env.PORT}!`),
);

module.exports = app;
module.exports.handler = serverless(app);
