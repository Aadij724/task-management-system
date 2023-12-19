import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: false,
    },
    deadline:{
        type: Date,
        required: false,
    },
    skillsReq: {
        type: [String],
        required: false,
    },
    estimatedTimeReq: {
        type: Number,
        required: false,
    },
    projectId: {
        type: String,
        required: true,
    },
    actualTimeTaken: {
        type: Number,
        required: false,
    },
    completedBy: {
        type: String,
        required: false,
    },
    completedAt: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        required: true,
        eval: ["ongoing", "completed", "toBeDone"],
    },
    
},{
    timestamps:true
});

export default mongoose.model("Task", taskSchema)