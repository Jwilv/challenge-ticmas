import mongoose, { Model, Schema } from "mongoose";
import { Task } from "../../../../../domain/entity/task";

const TaskSchema = new Schema({
    description: { type: String, required: false },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished', 'deleted'],
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