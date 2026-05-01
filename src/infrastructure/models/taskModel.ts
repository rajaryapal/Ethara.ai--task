import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    assignedTo: string;
    status: string;
    dueDate: Date;
    projectId: string;
}

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    assignedTo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    dueDate: {
        type: Date,
        required: true,
    },
    projectId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const TaskModel = mongoose.model<ITask>('Task', taskSchema);

export default TaskModel;