const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Example chat endpoint with proper authentication
router.post("/message", protect, async (req, res) => {
  try {
    const userId = req.user.id; // This is already validated by protect middleware
    const { message, recipientId } = req.body;
    
    // Your chat logic here
    // Since req.user is populated by protect middleware, it's safe to use
    
    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;