const express = require('express');
const { login } = require('../../controllers/Login');
const router = express.Router();

router.post('/login', async (req, res) => {

    const userData = await login(req);
    const { w_id, user_login } = userData[0];

    if (userData) {
        res.status(200).send({
            message: "success",
            data: { w_id, user_login }
        });
    } else {
        res.status(401).send({
            message: "unauthorized",
            data: []
        });
    }


});

module.exports = router;
