const employee = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Complete the report",
                "date": "2025-01-30",
                "category": "Work",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Fix website bug",
                "date": "2025-01-28",
                "category": "Technical",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 3",
                "description": "Team meeting",
                "date": "2025-01-29",
                "category": "Meeting",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Research new technologies",
                "date": "2025-02-01",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Client presentation preparation",
                "date": "2025-01-30",
                "category": "Client",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Update the software version",
                "date": "2025-01-29",
                "category": "Technical",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Team brainstorming session",
                "date": "2025-02-02",
                "category": "Meeting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Refactor the codebase",
                "date": "2025-01-31",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Design a new feature",
                "date": "2025-02-05",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Fix critical bug in app",
                "date": "2025-02-01",
                "category": "Bug Fix",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "User feedback analysis",
                "date": "2025-02-03",
                "category": "Feedback",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 4",
                "description": "Submit project documentation",
                "date": "2025-01-30",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Organize office event",
                "date": "2025-02-10",
                "category": "Event",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Prepare employee performance report",
                "date": "2025-02-06",
                "category": "Report",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Develop marketing strategy",
                "date": "2025-02-07",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 4",
                "description": "Organize team-building activity",
                "date": "2025-02-09",
                "category": "Team Building",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employee,admin}
    

}