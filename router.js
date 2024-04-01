const router=require("express").Router()
const { response } = require("express")
const models=require("./mongdata.js")


router.get("/",(req,res,next)=>{
   
    res.json([{
        "mentor_id":"",
        "mentor_name":"",
        "mentor_mail_id":"",
        "mentor_number":"",
        "mentor_role":"",
        "course":"",
    },
        {
            "student_id":"",
    "student_name":"",
    "student_mail_id":"",
    "student_number":"",
    "student_batch_id":"",
    "student_course_details":"",
    "student_mail_id":"",
        },

    {   "mentor_name":"",
        "mentor_id":"",
        "student":{
            "student_name":"",
            "student_id":"",
        }},{
            "url1":"/mentorcreate",
            "url2":"/studentcreate",
            "url3":"/studentassign",
            "url4":"/allstudentassigned",
            "url5":"/allstudent",
            "url6":"/allmentors"
        }])
    
})
router.post("/mentorcreate", async(req,res,next)=>{
    const newmentordata= await new models.mentormodel(req.body) 
          await newmentordata.save().then(()=>console.log("mentor data save"))
    res.send(`mentor data is updated data:${newmentordata}`)
    console.log(req.body);
})

router.post("/studentcreate",async(req,res,next)=>{
    const newstudentdata= await new models.studentmodel(req.body) 
          await newstudentdata.save().then(()=>console.log("student data save"))
    res.send(`student data is updated  :${newstudentdata}`)
    console.log(req.body);
})

router.post("/studentassign",async(req,res,next)=>{
    const newassignstudentdata= await new models.assignstudentmodel(req.body) 
          await newassignstudentdata.save().then(()=>console.log("newassignstudent data save")).catch(()=>console.log("newassignstudent data is not save"))
    res.send(`student  is assign :${newassignstudentdata}`)
    console.log(req.body);
})

router.get("/allstudentassigned",async(req,res,next)=>{
      await models.assignstudentmodel.find().then((response)=>{
        res.status(200).json({
            success:true,
            message:"task get successfully", 
            data:response
        })
        console.log(response);
     })
     
})

router.get("/allstudent",async(req,res,next)=>{
    await models.studentmodel.find().then((response)=>{
      res.status(200).json({
          success:true,
          message:"student data get successfully", 
          data:response
      })
      console.log(response);
   })
   
})

router.get("/allmentors",async(req,res,next)=>{
    await models.mentormodel.find().then((response)=>{
      res.status(200).json({
          success:true,
          message:"mentors data get successfully", 
          data:response
      })
      console.log(response);
   })
   
})
module.exports=router