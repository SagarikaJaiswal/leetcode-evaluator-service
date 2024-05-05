import { Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import { SampleJob } from "../jobs/SampleJob";

export default function sampleWorker(queuename: string) {
  new Worker(
    queuename,
    async (job) => {
      console.log("sample job worker kicking in");
      const sampleJobInstance = new SampleJob(job.data);
      if (job.name === "SampleJob") {
        //const sampleJobInstance = new SampleJob(job.data);
        sampleJobInstance.handle(job);
      }
      //else {
      //   //const sampleJobInstance = new SampleJob(job.data);
      //   sampleJobInstance.failed(job);
      //   return false;
      // }
      return true;
    },
    { connection: redisConnection }
  );
}
