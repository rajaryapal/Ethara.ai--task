import React, { useState } from 'react';
import { createTask } from '../api/taskApi';
import { Task } from '../types';

const TaskForm: React.FC<{ existingTask?: Task; onTaskCreated: () => void }> = ({ existingTask, onTaskCreated }) => {
    const [title, setTitle] = useState(existingTask?.title || '');
    const [description, setDescription] = useState(existingTask?.description || '');
    const [assignedTo, setAssignedTo] = useState(existingTask?.assignedTo || '');
    const [status, setStatus] = useState(existingTask?.status || 'Pending');
    const [dueDate, setDueDate] = useState(existingTask?.dueDate || '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const taskData = { title, description, assignedTo, status, dueDate };
        await createTask(taskData);
        onTaskCreated();
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setAssignedTo('');
        setStatus('Pending');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                required
            />
            <input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                placeholder="Assigned To"
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">{existingTask ? 'Update Task' : 'Create Task'}</button>
        </form>
    );
};

export default TaskForm;