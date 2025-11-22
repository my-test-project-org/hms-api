const mongoose = require('mongoose');

const MedicalRecodeSchema = new mongoose.Schema({
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        visiteDate: {
            type: Date,
            default: date.now,
            required: true
        },
        diagnosis: {
            type: String
        },
        testResult: {
            testName: String,
            fileUrl: String,
            uploadedAt: Date
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model("MedicalRecode", MedicalRecodeSchema);