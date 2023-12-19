import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    team: {
        type: [String],
        required: true
    },
    lead: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: false,
    },
    deadline:{
        type: Date,
        required: false,
    },
    topPerformer: {
        type: [String],
        required: false
    },
    tasksCompleted: {
        type: [String],
        required: false
    },
    onGoningTaks: {
        type: [String],
        required: false,
    },
    tasksToDo: {
        type: [String],
        required: false,
    },
    progress: {
        type: Number,
        required: false,
    }
    
},{
    timestamps:true
});

export default mongoose.model("Project", projectSchema)