// backend/routes.js
const express = require('express');
const router = express.Router();

router.post('/report', (req, res) => {
    // Mock issue reporting logic
    res.status(200).json({ message: "Issue reported successfully" });
});

module.exports = router;
