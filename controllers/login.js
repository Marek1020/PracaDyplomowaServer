const { dbQuery } = require("./dbQuery");

const login = async (req) => {

    const { login, password } = req.body;

    const result = await dbQuery("SELECT * FROM  `sys_users` WHERE `user_login` = ? AND `user_password` = ?", [login, password]);

    if (result.length > 0 && (result[0].user_login === login && result[0].user_password === password)) {
        return result;
    }

    return false;


}

module.exports = { login };
