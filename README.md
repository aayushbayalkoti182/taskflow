# TaskFlow

TaskFlow is a simple and responsive personal task management application built with React. It allows users to create, edit, complete, delete, categorize, and filter their tasks while automatically saving tasks in the browser using localStorage.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or active
- Categorize tasks
- Filter tasks by:
  - All
  - Active
  - Completed
- Display remaining and completed task counts
- Save tasks using browser localStorage
- Responsive design for desktop and mobile devices
- Controlled form inputs
- Dynamic task rendering

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- Browser localStorage

## React Concepts Used

This project demonstrates the following React concepts:

- Functional components
- Props
- useState
- useEffect
- Event handling
- Controlled components
- Conditional rendering
- List rendering with `.map()`
- Unique keys
- Parent-to-child communication

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── FilterBar.jsx
│
├── App.jsx
├── App.css
└── index.css