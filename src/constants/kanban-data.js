export const kanbanData = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        title: "Setup project repository",
        description: "Initialize GitHub repo and setup branch protection rules",
      },
      {
        id: "task-2",
        title: "Design UI mockups",
        description: "Create wireframes for dashboard and profile page",
      },
      {
        id: "task-3",
        title: "Write project documentation",
        description: "Prepare README and contribution guidelines",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-4",
        title: "Develop login feature",
        description: "Implement authentication using JWT",
      },
      {
        id: "task-5",
        title: "Create Kanban board component",
        description: "Build draggable board with columns and tasks",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-6",
        title: "Setup CI/CD pipeline",
        description: "Configured GitHub Actions for automatic deployment",
      },
      {
        id: "task-7",
        title: "Install dependencies",
        description: "Installed React, Next.js, Tailwind CSS, and ESLint",
      },
    ],
  },
];
