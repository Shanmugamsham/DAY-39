
const mongoose=require("mongoose")


const mentor=new mongoose.Schema({
    mentor_id:Number,
    mentor_name:String,
    mentor_mail_id:String,
    mentor_number:Number,
    mentor_role:String,
    course:String
     

},{timestamps:true})

const student=new mongoose.Schema({
    student_id:Number,
    student_name:String,
    student_mail_id:String,
    student_number:Number,
    student_batch_id:String,
    student_course_details:String,
    student_mail_id:String
     

},{timestamps:true})


const assignstudent= new mongoose.Schema({
    mentor_name:String,
    mentor_id:Number,
    student:{
        student1_name:String,
        student1_id:mongoose.SchemaTypes.ObjectId,
        student2_name:String,
        student2_id:mongoose.SchemaTypes.ObjectId,
        student3_name:String,
        student3_id:mongoose.SchemaTypes.ObjectId,
        student4_name:String,
        student4_id:mongoose.SchemaTypes.ObjectId,
        student5_name:String,
        student5_id:mongoose.SchemaTypes.ObjectId
    }
    
})




const studentmodel=mongoose.model("student",student)
const mentormodel=mongoose.model("mentor",mentor)
const assignstudentmodel=mongoose.model("assignstudent",assignstudent)

module.exports={
    studentmodel:studentmodel,
    mentormodel:mentormodel,
    assignstudentmodel:assignstudentmodel
}
