# 🌐 Full-Stack Portfolio: React + FastAPI + MongoDB

A modern, responsive full-stack portfolio website built with **React.js** (frontend), **FastAPI** (backend), and **MongoDB** (database), showcasing projects, certifications, and professional experience. This portfolio also integrates Google Drive-hosted CV viewing and downloading, along with real-time click analytics via Google Analytics 4 (GA4).

---

## 📌 Features

### 🔹 Frontend (React + TailwindCSS)
- Responsive, dark-themed UI with TailwindCSS
- Animated transitions via Framer Motion
- Project filtering by category (Certifications, Projects, Badges)
- Modal popups for badges and projects
- View and Download CV buttons (Google Drive integrated)
- Toast notifications
- GA4 click tracking for analytics

### 🔹 Backend (FastAPI)
- RESTful API for portfolio data (CV, certs, badges)
- Contact form POST handler (optional email alert support via SMTP)
- MongoDB integration using Motor (Async driver)
- CORS configured for frontend communication

### 🔹 Database (MongoDB)
- Stores contact form submissions (`status_checks` collection)
- Easily extensible for storing project/cert data dynamically

---

## 🗂️ Project Structure
```
my-portfolio-websites
│── frontend #Rect.js frontend
│ ├── build/
│ │── public/
│ │── .env
│ │── src/
│    │── App.css
│    │── App.js
│    │── components.js
│    ├── index.css
│    ├── index.js
│    ├── Modal.js
│ ├── package.json
│ ├── craco.config.js
│ └── ...
├── backend #FastAPi backend
│ ├── server.py
│ ├── email_utils.py
│ │── .env
│ ├── venv/
│ └── requirements.txt
│── nginx.conf
├── .gitignore
├── Dockerfile
│── docker-compose.yml
└──  README.md
```

---
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pascalpedro/my-portfolio-website.git
cd my-portfolio-website
```

### 2. 🔧 Backend Setup (FastAPI)
🧪 Requirements
- Python 3.10+

- MongoDB (Atlas or local)

- Virtualenv (recommended)

🔌 Installation
```bash
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```
🔐 Create .env in backend/:
```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
DB_NAME=portfolio_db
```
▶️ Run Backend
```bash
uvicorn server:app --reload --port 8000
```
- API will be available at: http://localhost:8000/api

### 3. 🖼️ Frontend Setup (React)
```bash
cd frontend
npm install
```
Create .env in frontend/:
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Replace with your GA4 ID
```
▶️ Run Frontend
```bash
npm start
```
- Frontend runs on: http://localhost:3000

📊 Analytics (Google Analytics 4)
Custom events tracked:
- view_cv_clicked
- download_cv_clicked

You can view them in:
```nginx
Google Analytics > Reports > Engagement > Events
```
✉️ Contact API (Optional)
POST /api/status

Example payload:
```json
{
  "client_name": "Pascal Pedro"
}
```
- Data is stored in MongoDB and can trigger email alerts if integrated.

📄 Dynamic Portfolio Data
GET /api/portfolio returns:
```json
{
  "cv_link": "https://drive.google.com/uc?export=view&id=...",
  "projects": [...],
  "certifications": [...]
}
```
- You can fetch this on the frontend to keep your CV/projects synced.

🌍 Deployment
- Frontend: Vercel, Netlify, or S3 + CloudFront
- Backend: Render, Railway, or AWS EC2
- Database: MongoDB Atlas (Cloud)

🧠 Tech Stack
| Layer     | Stack                                       |
| --------- | ------------------------------------------- |
| Frontend  | React, TailwindCSS, Framer Motion           |
| Backend   | FastAPI, Motor, Pydantic                    |
| Database  | MongoDB (Atlas or local)                    |
| Hosting   | Netlify (frontend), Railway (backend) |
| Analytics | Google Analytics 4                          |

## 🤝 Contribution Guidelines
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (git checkout -b feature/YourFeature)
3. Commit changes with meaningful messages. (git commit -m 'Add YourFeature')
4. Push to the branch (git push origin feature/YourFeature)
5. Submit a Pull Request

## 📬 Contact
- **Pascal Attama** 
- **Email: Attamapascalpedro@gmail.com**
- **Website: https://pascalattama.netlify.app/**
- **GitHub: [@Pascalpedro](https://github.com/Pascalpedro) 