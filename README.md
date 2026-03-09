# Grace Zawadi  Portfolio

A modern, responsive personal portfolio built with **React**, **Tailwind CSS**, and a **Flask** backend. Designed to showcase my work as a full-stack developer with a focus on clean UI, elegant interactions, and real-world projects.

 **Live Site:** [gracezawadi.vercel.app](#) *(update with your live URL)*

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Projects Showcased](#projects-showcased)
- [Contact](#contact)

---

## About

I'm **Grace Zawadi**, a full-stack developer based in Nairobi, Kenya — turning ideas into elegant digital experiences with React, Flask, and Python. I also work with data, using Pandas and NumPy to analyse real-world datasets and draw actionable insights.

Currently levelling up with **TypeScript**, **PostgreSQL**, and **FastAPI**.

---

## Features

- ⚡ Responsive, mobile-first design
-  Dark / light mode toggle with system preference detection
-  Smooth scroll navigation with active section tracking
-  Categorised skills section (Frontend, Backend, Data & Analytics, Tools)
-  Data & analytics project showcase alongside web projects
-  Intentional contact section — no broken forms, just real links
-  Resume download button
-  Staggered Hero animations on load

---

## Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS
- React Icons

**Backend**
- Flask (Python)
- Flask-CORS

**Tooling**
- Git & GitHub
- VS Code
- Figma

---

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/          # favicon, resume PDF
│   ├── src/
│   │   ├── assets/      # project images, profile photo
│   │   ├── components/  # Navbar, Hero, Skills, Projects, Contact, Footer
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   └── vite.config.js
└── backend/
    ├── app.py           # Flask API (contact endpoint)
    └── requirements.txt
```

---

## Getting Started

### Prerequisites
- Node.js (LTS)
- Python 3.x + pipenv

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`

### Backend

```bash
cd backend
pipenv install
pipenv run python app.py
```

Runs at `http://localhost:5000`

---

## Projects Showcased

### Web Projects

| Project | Description | Stack |
|--------|-------------|-------|
| [Coursify](https://coursify-frontend-psi.vercel.app/) | Role-based learning platform with JWT auth, instructor dashboards, and student enrollment | React, Flask, JWT, Formik, Tailwind |
| [Ticksy](https://ticksy-frontend.vercel.app/) | Mobile-first event ticketing platform with MPESA integration and real-time ticket availability | React, Redux Toolkit, Flask, PostgreSQL |
| [Vacation Planner](https://vacation-planner-eta.vercel.app/) | Destination discovery app with favourites, filtering, and persistent trip lists | React, React Router, json-server, Tailwind |
| [Expense Tracker](https://expense-tracker-eight-gray.vercel.app/) | Personal finance tracker with KES formatting, smart sorting, and instant search | React, Vite, CSS |

### Data & Analytics

| Project | Description | Tools |
|--------|-------------|-------|
| [Password Vulnerability Analysis](https://github.com/Chenzie2/Password-Strength-and-Vulnerability-Analysis) | Structural analysis of password strength patterns from a real Kaggle dataset | Pandas, NumPy, Seaborn, Matplotlib |
| [Kenya Fiscal Landscape (2000–2021)](https://github.com/Chenzie2/Kenya-Fiscal-Landscape-Analysis) | Debt sustainability analysis engineering Effective Interest Rate and Debt-to-GDP metrics | Pandas, Matplotlib, Seaborn |
| [Superstore Sales Analysis](https://github.com/Chenzie2/superstore-sales-analysis) | Exploratory analysis of ~10,000 orders identifying revenue drivers and regional trends | Pandas, Matplotlib |

---

## Contact

-  [gracezawadi24@gmail.com](mailto:gracezawadi24@gmail.com)
-  [LinkedIn](https://www.linkedin.com/in/grace-zawadi-3988a2301/)
-  [GitHub](https://github.com/Chenzie2)

---

*Built with love by Grace Zawadi · Nairobi, Kenya*