const login = async (req) => {

    const { login, password } = req.body;

    if (login === "admin" && password === "admin") {
        return true
    }

    return false
}

module.exports = { login };
