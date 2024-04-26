import express from "express";

import { pingCheck } from "../../controller/pingController";

const v1Router = express.Router();

v1Router.use("/ping", pingCheck);
export default v1Router;
