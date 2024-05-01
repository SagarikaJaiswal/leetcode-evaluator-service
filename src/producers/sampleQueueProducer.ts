import sampleQueue from "../queues/sampleQueue";

export async function addJobs(name: string, payload: Record<string, unknown>) {
  await sampleQueue.add(name, payload);
  console.log("Successfully added the job");
}
