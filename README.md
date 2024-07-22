# Event Master

## Project Overview
This project is a web application for managing events. It includes a backend API built with Spring Boot and a frontend application built with Vite.

## Installation Instructions

### Backend
1. **Clone the repository:**
    - Using GitLab:
        ```bash
        git clone https://gitlab.com/Ravisadilanka/Event_Management_System.git
        cd Event_Management_System/event_management
        ```
    - Using GitHub:
        ```bash
        git clone https://github.com/Ravisadilanka/Event_Management_System
        cd Event_Management_System/event_management
        ```

2. **Set up MySQL database:**
    - Create a database named `event_management_system`
    - Update `src/main/resources/application.properties` with your database credentials:
        ```properties
        # configuration
        spring.jpa.hibernate.ddl-auto=update
        spring.datasource.url=jdbc:mysql://localhost:3306/event_management_system
        spring.datasource.username=your_username
        spring.datasource.password=your_password
        ```

3. **Build and run the backend:**
    ```bash
    ./mvnw spring-boot:run
    ```
    The backend should now be running on http://localhost:8080.

### Frontend
1. **Navigate to the frontend directory:**
    ```bash
    cd ../Frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend:**
    ```bash
    npm run dev
    ```
