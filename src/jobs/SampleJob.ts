import { Job } from "bullmq";

import { IJob } from "../types/bullMQJobDefinition";

export class SampleJob implements IJob {
  name: string;
  payload?: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payload = payload;
  }
  handle = (job?: Job) => {
    console.log("Successfully completed the job", job?.data);
  };
  failed = (job?: Job) => {
    console.log("Job failed - ", job?.id, job?.name);
  };
}
