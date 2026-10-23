const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

let complaints = [];

// API to submit a complaint
app.post('/api/complaints', (req, res) => {
    const { title, description, category, anonymous } = req.body;
    const token = Math.random().toString(36).substring(2, 10).toUpperCase() + Math.random().toString(36).substring(2, 10).toUpperCase();
    const newComplaint = { id: complaints.length + 1, token, title, description, category, status: 'SUBMITTED', anonymous };
    complaints.push(newComplaint);
    res.json({ success: true, token, message: 'Complaint submitted successfully.' });
});

// API to track a complaint
app.get('/api/complaints/track/:token', (req, res) => {
    const complaint = complaints.find(c => c.token === req.params.token);
    if (complaint) {
        res.json({ success: true, complaint });
    } else {
        res.status(404).json({ success: false, message: 'Invalid token.' });
    }
});

// API to get all resolved complaints (public)
app.get('/api/complaints/resolved', (req, res) => {
    const resolved = complaints.filter(c => c.status === 'RESOLVED' || c.status === 'CLOSED');
    res.json({ success: true, resolved });
});

// API for Dashboard (Mock stats)
app.get('/api/stats', (req, res) => {
    res.json({
        total: complaints.length,
        submitted: complaints.filter(c => c.status === 'SUBMITTED').length,
        resolved: complaints.filter(c => c.status === 'RESOLVED').length,
    });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
