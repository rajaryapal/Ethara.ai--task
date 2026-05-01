import React from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskList: React.FC = () => {
    const { tasks, loading, error } = useTasks();

    if (loading) {
        return <div>Loading tasks...</div>;
    }

    if (error) {
        return <div>Error loading tasks: {error.message}</div>;
    }

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.status}</p>
                        <p>Assigned to: {task.assignedTo}</p>
                        <p>Due Date: {task.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;