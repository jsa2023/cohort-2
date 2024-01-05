const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    res.status(200).json({ message: 'Admin created successfully' });
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;