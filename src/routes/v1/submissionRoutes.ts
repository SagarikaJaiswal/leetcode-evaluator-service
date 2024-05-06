import express from "express";

import { addSubmission } from "../../controller/submissionController";
import { createSubmissionSchema } from "../../dtos/CreateSubmissionDto";
import { validate } from "../../validators/zodValidator";

const submissionRouter = express.Router();

submissionRouter.post("/",validate(createSubmissionSchema), addSubmission);
export default submissionRouter;
