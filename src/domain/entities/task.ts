export interface Task {
    id: string;
    title: string;
    description: string;
    assignedTo: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: Date;
    projectId: string;
}