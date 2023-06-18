import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import example from "./route/example";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Main API -- kansd');
});

//import router file
// use router
app.use('/example', example);

const PORT = process.env.PORT || 8000;

// todo - cors here
// // # if you want anyone to be able to connect
// app.use(cors({ origin: true }))
// // # if you want only your frontend to connect
// app.use(cors({ origin: "http://localhost:3000" }))

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = app;
