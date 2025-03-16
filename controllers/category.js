const { dbQuery } = require("./dbQuery");

const getCategory = async (req) => {
  const { id } = req.body;
  if (id) {
    return await dbQuery(
      "SELECT DISTINCT * FROM `wh_category` WHERE w_id = ?",
      [id]
    );
  } else {
    return await dbQuery("SELECT DISTINCT * FROM `wh_category`", []);
  }
};

module.exports = { getCategory };
