import { Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import { SampleJob } from "../jobs/SampleJob";

export default function sampleWorker(queuename: string) {
  new Worker(
    queuename,
    async (job) => {
      console.log("sample job worker kicking in");
      if (job.name === "SampleJob") {
        const sampleJobInstance = new SampleJob(job.data);
        sampleJobInstance.handle(job);
      }
      //return true;
    },
    { connection: redisConnection }
  );
}
