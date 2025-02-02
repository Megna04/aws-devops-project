# AWS DevOps Project

A Dockerized Node.js application deployed using AWS ECS, ECR, and EC2. This project demonstrates how to automate deployments, scale applications, and build a CI/CD pipeline for high availability.

---

## 🚀 Features

- Dockerized Node.js application.
- Containerized using Docker and deployed on AWS ECS.
- Scalable architecture for high availability.
- Automated deployment pipeline using AWS CodePipeline.
- Version control and CI/CD integration with GitHub.

---

## 🛠️ Tools and Technologies

- **Programming Language**: Node.js
- **Containerization**: Docker
- **AWS Services**:
  - ECS (Elastic Container Service)
  - ECR (Elastic Container Registry)
  - EC2 (Elastic Compute Cloud)
  - IAM (Identity and Access Management)
- **CI/CD Tools**: AWS CodePipeline, CodeBuild
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

```
aws-devops-project/
├── app/               # Application code (Node.js files)
├── Dockerfile         # Docker configuration
├── README.md          # Documentation
├── .gitignore         # Ignored files (e.g., node_modules)
└── buildspec.yml      # CI/CD configuration for AWS CodeBuild
```

---

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Megna04/aws-devops-project.git
   cd aws-devops-project
   ```

2. Install Node.js dependencies:
   ```bash
   cd app
   npm install
   ```

---

## 🚀 Running the Application Locally

1. Build the Docker image:
   ```bash
   docker build -t aws-devops-project .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 aws-devops-project
   ```

3. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## 🌐 Deployment on AWS

### Step 1: Push Docker Image to ECR

1. Authenticate Docker with ECR:
   ```bash
   aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.ap-south-1.amazonaws.com
   ```

2. Tag and push the Docker image:
   ```bash
   docker tag aws-devops-project:latest <account-id>.dkr.ecr.ap-south-1.amazonaws.com/aws-devops-project:latest
   docker push <account-id>.dkr.ecr.ap-south-1.amazonaws.com/aws-devops-project:latest
   ```

### Step 2: Deploy on ECS

1. Create an ECS Cluster.
2. Define a Task Definition.
3. Launch a Service to run your container.

### Step 3: Monitor and Scale

- Use AWS ECS Console or AWS CLI to monitor tasks.
- Configure auto-scaling for high traffic.

---

## 🔄 CI/CD Pipeline

This project uses AWS CodePipeline for automated deployments:

1. **Source Stage**: Pull code from the GitHub repository.
2. **Build Stage**: Build Docker image using AWS CodeBuild.
3. **Deploy Stage**: Push the image to ECS.

The pipeline ensures zero downtime during updates and is triggered on every commit.

---

## 📈 Future Improvements

- Add HTTPS using an AWS Application Load Balancer.
- Set up CloudWatch for monitoring and logging.
- Implement auto-scaling based on traffic patterns.
- Optimize the Dockerfile for faster builds.

---

## 🤝 Acknowledgments

- **OpenAI ChatGPT**: For Node.js code.
- **AWS Documentation**: For detailed AWS service information.
- [Docker Documentation](https://docs.docker.com/): For containerization guides.

---




