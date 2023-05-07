import jobModel from "../models/jobModel.js"
import userModel from "../models/userModel.js"
//post api to create jobs
export const createJobController = async(req,res, next) =>{
    try{
        const{company , position} = req.body
    if(!company || !position){
        next('please provide company name')
    }

    const newjob={
        company,
        position
    }
    //if(jobType==='Teaching'){const teacherJobTypes=['tutor','teacher','teaching',etc]
      //  next('Teaching jobs are not allowed')
  //  }


    const job = await jobModel.create(newjob)
    res.status(200).json({
        success:true,
        message:"job added successfully"
    })
}
catch(err){
    err
}
    }
export const getJobController = async (req,res,next) =>{
    try{
        const jobs = await jobModel.find();
    res.status(200).json({
        success:true,
        jobs,
        totalJobs :jobs.length
    })

    }
    catch(err){
        err
    }}

export const updateJobController =async(req,res,next)=>{
        try{
            const {id}=req.params
            const {workLocation,position}=req.body
            if(!workLocation||!position){
                next('please provide all fields')
            }
            const job=await jobModel.findOne({_id:id})
            if(!job){
                next(`no job found with this id ${id}`)
            }
            const updateJob=await jobModel.findOneAndUpdate({_id:id},{//req.body
                workLocation:workLocation,
                position:position
            })
            res.status(200).json({
                updateJob
            })
        }
        catch(e){
            e
        }
    }

    export const deleteJobController =async(req,res,next)=>{
        try{
            const {id}=req.params
            
            const job= await jobModel.findOne({_id:id})
            if(!job){
                next('no job found')

            }
            await job.deleteOne({_id:id})
            res.status(200).json({
                message:'successfully,job deleted'
            })
        }
        catch(e){
            e
        }
    }









