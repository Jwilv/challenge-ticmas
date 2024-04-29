import mongoose, { Schema, Model } from 'mongoose'

export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
}


const TaskSchema = new Schema({
    description: { type: String, required: false },
    title: { type: String, required: true },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        },
        default: 'pending'
    }

})

TaskSchema.methods.toJSON = function () {
    const { __v, _id, ...task } = this.toObject();
    task.id = _id;
    return task;
}

export const TaskModel: Model<Task> = mongoose.models.Task || mongoose.model('Task', TaskSchema);