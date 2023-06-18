import express from "express";

import { getOnePayment } from "../functions/example/getData";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const router = express.Router();

router.get('/get-example-data', getOnePayment);

export default router;
