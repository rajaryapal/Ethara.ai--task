import React, { useEffect } from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard: React.FC = () => {
    const { tasks, fetchTasks } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="dashboard">
            <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
            <TaskForm />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Dashboard;