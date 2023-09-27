# TaskAnalysis-Frontend
 
**Project Overview:**
- **Company Name:** ArrayPointer Pvt Ltd
- **Employment Type:** Part-Time
- **Role:** Software Development Intern
- **Duration:** about 5 months

**Roles and Responsibilities:**
As a Software Development Intern in the "Employee Investigation Software" project, my responsibilities include:
1. **Developing Front-end:** Working on the user interface (UI) of the software using Vue.js, Tailwind CSS, HTML, and JavaScript to create an interactive and user-friendly experience.
2. **Gathering Requirements:** Collaborating with clients to understand their needs and requirements for the software.
3. **Contacting with Backend Team:** Coordinating with the backend development team to ensure seamless integration of front-end and back-end components.
4. **REST API Testing:** Conducting testing and validation of REST APIs, possibly using Postman, to ensure they function correctly.
5. **Interactive User Interface:** Creating an intuitive and responsive user interface for the software.
6. **Project Name:** "Employee Investigation Software"

**Technology Stack:**
The project uses the following technologies:
- Front-end: Vue.js, HTML, CSS, JavaScript
- CSS Framework: Tailwind CSS
- Database: MySQL with SQLAlchemy
- Backend Framework: FastAPI
- Communication: REST API
- Cloud Services: AWS (EC2 for hosting, S3 for storage)
- API Testing: Postman
- Version Control: GitHub
- Development Environment: Visual Studio Code

**Functionalities:**
The software offers the following functionalities:
1. **Sign In:** User authentication for both Admin and Employee roles.
2. **Password Hashing:** Secure password storage using hashing techniques.
3. **CRUD of Employees:** Admin can perform CRUD operations on employee records.
4. **Admin and Employee Chat/Comments:** Interactive communication features.
5. **CRUD of Projects/Tasks:** Managing and tracking projects and tasks.
6. **Searching:** Capability to search for specific information within the application.
7. **Pagination:** Organizing and presenting data in manageable chunks.

**Architecture:**
The project follows a role-based architecture with separate logins for Admin and Employee roles. Here's a breakdown of the architecture:

- **Admin Role:** 
  - Access to CRUD operations for employee records.
  - Ability to assign employees to projects.
  - CRUD operations for projects.

- **Employee Role:**
  - Dashboard displaying assigned projects.
  - Automatic grouping of employees working on similar projects.
  - Communication through GET/POST requests within project groups.

The architecture ensures that Admins have control over employee and project management, while employees have an efficient platform for collaboration and communication.

