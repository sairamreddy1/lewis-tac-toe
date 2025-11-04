# Lewis-Tac-Toe / Lewis-Tac-Azure

**Author:** Shiva Lakshmi Renu Yama  
**Course:** Lewis.Education – Coding Standards Assignment  
**Project Repository:** [GitHub - renuyama/lewis-tac-toe](https://github.com/renuyama/lewis-tac-toe)

---

## Project Summary

This project demonstrates the development and deployment of a React-based Tic-Tac-Toe game in two phases:

1. **Requirement 1 & 2 – Lewis-Tac-Toe:**  
   Creating a functional React Tic-Tac-Toe application following the official React tutorial and deploying it manually to Microsoft Azure.

2. **Requirement 3 & 4 – Lewis-Tac-Azure:**  
   Rebuilding the project using CI/CD practices with GitHub Actions and Azure Static Web Apps for automated deployment and continuous integration.

---

## Technologies Used

- **React (Functional Components & Hooks)** – for UI logic and game management  
- **JavaScript (ES6+)** – core programming language  
- **Node.js & npm** – for project setup and local development  
- **Microsoft Azure Static Web Apps** – for hosting and deployment  
- **GitHub** – for version control and CI/CD pipeline integration  

---

## Requirements Overview

### ✅ Requirement 1 – Lewis-Tac-Toe
- Followed the official React [Tic-Tac-Toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- Used **functional components** and **React Hooks**
- Renamed the app to **Lewis-Tac-Toe**
- Ensured clean, working code that compiles without warnings or errors

### ✅ Requirement 2 – Azure Hosting
- Hosted the application using **Microsoft Azure Static Web Apps**
- Source code managed via **GitHub**
- Documented deployment progress and challenges
- Completed within the assigned time frame (3 hours)

### ✅ Requirement 3 – CI/CD Setup
- Created a new Azure Static Web App connected to GitHub
- Verified automated workflow file (`.github/workflows/azure-static-web-apps.yml`)
- Confirmed that code pushes automatically trigger deployments

### ✅ Requirement 4 – Lewis-Tac-Azure
- Integrated the Tic-Tac-Toe code into the CI/CD hosted app
- Renamed project to **Lewis-Tac-Azure**
- Validated successful builds and deployments automatically via GitHub Actions

---

## Local Setup Instructions

### Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### Installation
```bash
# Clone the repository
git clone https://github.com/renuyama/lewis-tac-toe
cd lewis-tac-toe

# Install dependencies
npm install

# Run locally
npm start
```

The application will run locally at: **http://localhost:3000**

---

## Deployment Instructions

### Manual Hosting (Lewis-Tac-Toe)
1. Push the repository to GitHub.  
2. In the Azure Portal, create a Static Web App.  
   - Framework: React  
   - App location: `/`  
   - Output location: `build`  
3. Azure generates a GitHub Actions workflow to automate builds.  
4. Once deployed, verify the site using the provided Azure URL.

### Automated CI/CD (Lewis-Tac-Azure)
1. Create a new Azure Static Web App linked directly to the GitHub repo.  
2. Each new commit to `main` triggers an automated deployment.  
3. Modify the app to implement the React Tic-Tac-Toe logic.  
4. Rename app in the UI to “Lewis-Tac-Azure.”  
5. Confirm deployment success through the Azure dashboard.

---

## Coding Standards Compliance

- All code compiles and executes without warnings or errors  
- All non-original content properly credited in this README  
- ChatGPT use acknowledged for documentation assistance  
- README includes author details, setup, and licensing  
- MIT License added for open-source distribution  
- Tabs used for indentation; lines wrapped at ~100 chars  
- Variables, functions, and components use descriptive camelCase naming  
- Code conservatively commented with valuable explanations  
- Git and GitHub used for version control and CI/CD commits  

---

## Author’s Reflection

Working on this project gave me practical exposure to **React**, **Azure hosting**, and **CI/CD automation**.  
Transitioning from manual deployment to automated workflows helped me understand real-world DevOps processes.  
I also improved my understanding of clean coding standards, version control, and documentation.

---

## License

This project is licensed under the **MIT License**.
