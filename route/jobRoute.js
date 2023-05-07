import express from "express";
import { createJobController, getJobController,updateJobController,deleteJobController } from "../controllers/jobController.js";

const route = express.Router()

// post is used to send the data from frontend to backend
route.post('/create-job', createJobController )

route.get('/get-job',getJobController)

route.patch('/update-job/:id',updateJobController)

route.delete('/delete-job/:id',deleteJobController)

export default route