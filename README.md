# 🚀 CI/CD Pipeline with GitHub Actions, Docker & Kubernetes

## 📌 Project Overview

This project demonstrates a complete CI/CD pipeline for a Node.js application using GitHub Actions, Docker, Docker Hub, and Kubernetes (Minikube).

Whenever code is pushed to the **main** branch, GitHub Actions automatically:

* Checks out the repository
* Installs project dependencies
* Runs Jest tests
* Builds a Docker image
* Pushes the Docker image to Docker Hub

The application is then deployed locally on Kubernetes using Minikube.

---

# 🏗️ Architecture

```
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Run Tests
    ├── Build Docker Image
    └── Push Image to Docker Hub
                │
                ▼
        Docker Hub Repository
                │
                ▼
        Kubernetes (Minikube)
                │
                ▼
        Running Node.js Application
```

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* Jest
* Docker
* Docker Compose
* Docker Hub
* GitHub Actions
* Kubernetes
* Minikube
* Git

---

# 📂 Project Structure

```
cicd-docker-github-actions/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── app/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── test.js
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── screenshots/
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

---

# ⚙️ CI/CD Workflow

The GitHub Actions workflow performs the following steps:

1. Checkout source code
2. Install Node.js
3. Install project dependencies
4. Execute Jest tests
5. Build Docker image
6. Login to Docker Hub
7. Push Docker image to Docker Hub

---

# 🐳 Docker Image

Docker Hub Repository:

https://hub.docker.com/repository/docker/kunal7045/node-cicd/general

---

# ☸️ Kubernetes Deployment

Deploy using:

```bash
kubectl apply -f k8s/
```

Check resources:

```bash
kubectl get pods
kubectl get svc
```

Open the application:

```bash
minikube service node-cicd
```

---

# ▶️ Run Locally

Install dependencies:

```bash
cd app
npm install
```

Start the application:

```bash
npm start
```

Run tests:

```bash
npm test
```

---

# 🐳 Docker Commands

Build:

```bash
docker build -t node-cicd-app .
```

Run:

```bash
docker run -d -p 3000:3000 node-cicd-app
```

---

# 📸 Screenshots

The `screenshots/` folder contains:

* Application Running
* Docker Build
* Docker Container
* Docker Hub Push
* GitHub Repository
* GitHub Actions Workflow
* Kubernetes Pods
* Kubernetes Services
* Minikube Deployment
* Health Endpoint

---

# 🔗 Project Links

GitHub Repository

https://github.com/kunals66/cicd-docker-github-actions

GitHub Actions

https://github.com/kunals66/cicd-docker-github-actions/actions

Docker Hub

https://hub.docker.com/repository/docker/kunal7045/node-cicd/general

---

# 🎯 Features

* Automated CI/CD Pipeline
* Automated Testing
* Docker Image Build
* Docker Hub Integration
* Kubernetes Deployment
* Minikube Deployment
* GitHub Actions Automation

---

# 👨‍💻 Author

**Kunal Suryawanshi**

Computer Engineering Graduate

DevOps & Cloud Enthusiast
