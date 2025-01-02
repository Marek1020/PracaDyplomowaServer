const express = require('express');
const { login } = require('../../controllers/Login');
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

// Auth
router.post('/login', async (req, res) => {
    try {
        const userData = await login(req);
        console.log('userData',userData)
        if (userData) {
            sendResponse(res, 200, userData, "success login");
        } else {
            sendResponse(res, 401, null, "unauthorized");
        }
    } catch (error) {
        console.error('Login Endpoint Error:', error);
        sendResponse(res, 500, null, 'Internal Server Error');
    }
});

module.exports = router;
