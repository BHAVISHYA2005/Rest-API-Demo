// routes/users.js
const express = require('express');
const router = express.Router();

// Temporary in-memory database
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET single user
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// POST create user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) 
        return res.status(404).json({ error: 'User not found' });
    
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
});

// DELETE user
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.status(204).send(); // No content
});

module.exports = router;