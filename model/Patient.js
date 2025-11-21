const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patientId:{type:String,unique:true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String},
    dob: {type: Date, required: true},
    contact: {type: String, required: true},
    address: {type: String, required: true},
    medicalHistory:[{type:String}],
    documents:[
        {fileName:String,fileUrl:String,uploadDate:Date}
    ]
}, { timestamps: true });

module.exports=mongoose.model('Patient',PatientSchema);