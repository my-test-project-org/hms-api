const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true},
    role: {type: String,enum: ['admin', 'user','doctor','lab','nurse','pharmacist','reception'],required:true},
    password: {type: String, required: true},
    profilePic: {type: String},
    resetToken: {type: String},
    resetTokenExpiry: {type: Date},

    specialization: {type: String},
    qualifications: {type: String},
    experiences: {type: String},
    availability: [
        {day: String,startTime:String,endTime:String}
    ],
}, { timestamps: true });

module.exports=mongoose.model('User',UserSchema);