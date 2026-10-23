# City Connect

A civic complaint platform where citizens can report local problems securely. This ZIP contains both a robust React + Vite frontend and a lightweight Express.js backend.

## Tech Stack
*   **Frontend**: React, Vite, Tailwind CSS, React Router, Lucide Icons.
*   **Backend**: Node.js, Express, CORS.
*   **Design**: Implements the required warm palette (`#F9F8F6`, `#EFE9E3`, `#D9CFC7`, `#C9B59C`) augmented with a deep teal primary color as chosen by the AI. Neumorphic and bento-grid concepts are applied using Tailwind.

## How to Run

You will need two terminal windows to run both the frontend and backend simultaneously.

### 1. Start the Backend (API)
Open a terminal, navigate to the `backend` directory, install dependencies, and start the server:

```bash
cd backend
npm install
npm start
```
*The backend will run on `http://localhost:8000`.*

### 2. Start the Frontend
Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the development server:

```bash
cd frontend
npm install
npm run dev
```
*The frontend will run on `http://localhost:5173` (or the port Vite provides).*

### Features Implemented in this Core Build:
1.  **Public Homepage**: Beautiful landing page detailing the complaint process.
2.  **Anonymous Submission**: A functional form that securely generates a tracking token without user sign-up.
3.  **Token Tracking**: A dedicated tracking page to input your 16-character token and view live status from the backend.
4.  **Mayor Dashboard**: Protected view showing system-wide statistics pulling dynamically from the API backend.
