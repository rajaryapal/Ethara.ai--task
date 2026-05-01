export class TaskRepository {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
        this.TaskModel = mongoClient.model('Task');
    }

    async saveTask(taskData) {
        const task = new this.TaskModel(taskData);
        return await task.save();
    }

    async findTasks(filter = {}) {
        return await this.TaskModel.find(filter).exec();
    }

    async updateTask(taskId, updateData) {
        return await this.TaskModel.findByIdAndUpdate(taskId, updateData, { new: true }).exec();
    }

    async deleteTask(taskId) {
        return await this.TaskModel.findByIdAndDelete(taskId).exec();
    }
}