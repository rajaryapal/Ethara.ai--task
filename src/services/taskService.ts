import { Task } from '../domain/entities/task';
import { TaskRepository } from '../domain/repositories/taskRepository';

export class TaskService {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async createTask(taskData: Task): Promise<Task> {
        return await this.taskRepository.saveTask(taskData);
    }

    async getTasks(projectId: string): Promise<Task[]> {
        return await this.taskRepository.findTasks(projectId);
    }

    async updateTaskStatus(taskId: string, status: string): Promise<Task | null> {
        const task = await this.taskRepository.updateTask(taskId, { status });
        return task;
    }

    async deleteTask(taskId: string): Promise<void> {
        await this.taskRepository.deleteTask(taskId);
    }
}