import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/taskApi';
import { Task } from '../types';

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await getTasks();
                setTasks(fetchedTasks);
            } catch (err) {
                setError('Failed to fetch tasks');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (task: Task) => {
        try {
            const newTask = await createTask(task);
            setTasks((prevTasks) => [...prevTasks, newTask]);
        } catch (err) {
            setError('Failed to create task');
        }
    };

    const editTask = async (taskId: string, updatedTask: Partial<Task>) => {
        try {
            const updated = await updateTask(taskId, updatedTask);
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task._id === taskId ? updated : task))
            );
        } catch (err) {
            setError('Failed to update task');
        }
    };

    const removeTask = async (taskId: string) => {
        try {
            await deleteTask(taskId);
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        } catch (err) {
            setError('Failed to delete task');
        }
    };

    return {
        tasks,
        loading,
        error,
        addTask,
        editTask,
        removeTask,
    };
};

export default useTasks;