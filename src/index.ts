import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import { addJobs } from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import sampleWorker from "./workers/sampleWorker";
const app: Express = express();

app.use("/api", apiRouter);
app.listen(serverConfig.PORT, () => {
  console.log(`Server listening on port: ${serverConfig.PORT}`);
  sampleWorker("Sample Queue");
  addJobs("SampleJob", {
    name: "Sagarika",
    city: "xyz",
  });
});
