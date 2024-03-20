# Project Title
AdminHub: simplifying administrative tasks

## Overview

AdminHub is a comprehensive admin dashboard designed to streamline administrative tasks for small businesses or individuals. It provides a centralized platform for managing user data, tasks and resources efficiently.
## Problem

Many organizations struggle with disparate systems and manual processes for administrative tasks, leading to inefficiencies, errors, and delays. AdminHub addresses this issue by offering a user-friendly dashboard that consolidate essential functions in one place.

## User Profile

Administrators, managers and researchers will utilize AdminHub to oversee operations, track performance metrics, assign tasks, and manage resources. They will interact with the dashboard through intuitive interfaces tailored to their specific roles and responsibilities.

## Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

### 1. User authentication
- allow users to securely log in and access the dashboard.

### 2. Dashboard overview
- provide a comprehensive overview of key metricss, such as user statistics, system performace, and financial summaries (if need)
### 3. Task management
- enable users to create, assign and track tasks within the dashboard, improving productivity and organization.
### 4. Data Visualization
- utilize charts and graphs to visually represent data, facilitating better decision-making

### 5. Notification system (optional)
- Implement real-time notifications to alert users about important updates and deadlines

### 6. Calendar management
- allow users to crate, remove and manage events securely within the calendar

### 7. Search and Filtering
- Provide robust search and filtering capabilities to help users quickly locate information.

### 8. Responsive design

- ensure the dashboard is accessible across different devices and screen sizes for maximum usability

## Implementation

### Tech Stack

- Frontend: react.js, HTML, CSS (tailwind css?)
- Backend: node.js, express.js
- database: MongoDB (?)
- Authentication: JWT
- Data Viz: Chart.js
- Libraries: react-DnD for drag0and-drop functionality, bootstrap (responsive design)
- Deployment: TBD



### APIs

- google charts API for additional data viz options. 

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.
- Home/Dashboard: overview of dashboard features
- Task management: kanban board for task management
-Profile/Settings: page for displaying basic visualizations of user profile
- Calendar: calendar view for scheduling

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.
- TBD

### Data

- user data: name, email, role
- task data: title, description, assignee, deadline
- calendar data: event name, event type, owner, date 

### Endpoints

- `/api/auth/login` (POST): user login with email and password.
- `api/auth/register` (POST): user registeration with name, email and password
- `api/tasks` (GET, POST, PUT, DELETE): CRUD operations for tasks
- `/api/events`(GET, POST, PUT, DELETE): CRUD operations for calendar events

### Auth

- AdminHub will include login and user profile functionality using JWT for authentication. Upon successful login, users willl receive a token taht grants access to protected routes.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.
### Week 1 (25-30 hours)
- set up project structure and environment (both front and back end) - 5hr
- implement user authentication using JWT - 4hr
- calendat component UI and basic functionality (creat event) - 6hr
- create simple task management functionality (kanban board) - 7hr
- write basic api endpoints for task and calendar data - 3hr

### Week 2 (25-30 hours)

- implement basic data visualization for profile page - 8hr
- finalize UI/UX design and styling - 5hr
- conduct testing and debugging to ensure functionality - 4hr
- finalize documentation for presentation - 8hr

## Nice-to-haves

- integration with third-party apis for additional functionality: (eg, google calendar)
- advanced data analytics features for in-depth insights
- multi-language support for international users
- integration with email or SMS notification services
- offline functionality using service workers
## Pros and Cons
### Pros:
  - addresses a common pain point for small business owners and project managers
  - demonstrates proficiency in full-stack development and UI/UX design
  - opportunity to showcase time management and prioritization skills within a limited timeframe.
 
### Cons
  - Limited time may restrict the depth of features and polish of the final product.
  - Balancing functionality with simplicity may pose chanllenges in design and implementation
  - testing and debugging within a tight schedule can be demanding
## Priorities
- focus on essential features that provide maximum value to users (calendar, task management)
- utilize libraries and frameworks to expedite development without sacrificing quality
- prioririze user experience and interface design to ensure ease of use and accessibility  
