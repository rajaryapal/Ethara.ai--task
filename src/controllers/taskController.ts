import { Request, Response } from 'express';
import TaskService from '../services/taskService';

class TaskController {
    private taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    public createTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskData = req.body;
            const newTask = await this.taskService.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    public getTasks = async (req: Request, res: Response): Promise<void> => {
        try {
            const tasks = await this.taskService.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    public updateTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskId = req.params.id;
            const taskData = req.body;
            const updatedTask = await this.taskService.updateTask(taskId, taskData);
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    public deleteTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskId = req.params.id;
            await this.taskService.deleteTask(taskId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default TaskController;