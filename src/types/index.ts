export interface Task {
    id: string;
    title: string;
    description: string;
    assignedTo: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: Date;
    projectId: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}