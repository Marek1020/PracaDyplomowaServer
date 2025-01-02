const express = require('express');
const router = express.Router();

const sendResponse = (res, statusCode, data = null, message = '') => {
    res.status(statusCode).json({
        status: statusCode === 200 ? 'success' : 'error',
        data: data,
        message: message
    });
};

// Endpoint: Test
router.get('/test', async (req, res) => {
    try {
        sendResponse(res, 200, [], 'Test');
    } catch (error) {
        console.error('Test Endpoint Error:', error);
        sendResponse(res, 500, null, 'Error');
    }
});


module.exports = router;
