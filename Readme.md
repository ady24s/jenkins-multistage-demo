# Jenkins Multistage Demo

A demo project showcasing a **multistage Jenkins pipeline** with separate API and UI microservices.

## Structure
- **inventory-api/** — Flask API service  
- **inventory-ui/** — Frontend UI (HTML, CSS, JS)
- **docker-compose.yml** — Combined services  
- **Jenkinsfile** — CI/CD multistage pipeline

## Branches
- `feature-api`: API microservice only  
- `feature-ui`: UI microservice only  
- `dev`: Integration and testing branch  
- `main`: Production-ready full setup

## Run Locally
```bash
docker-compose up --build

