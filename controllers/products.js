const { dbQuery } = require("./dbQuery");

const getProducts = async (req) => {
  const { id } = req.params;
  if (id) {
    return await dbQuery(
      `SELECT
        wh_product.w_id AS "wh_product.w_id",
        wh_product.name AS "wh_product.name",
        wh_product.description AS "wh_product.description",
        wh_product.unit_price AS "wh_product.unit_price",
        wh_product.stock_amount AS "wh_product.stock_amount",
        wh_product.category_id AS "wh_product.category_id",
        wh_product.warehouse_id AS "wh_product.warehouse_id",
        wh_product.sys_create_date AS "wh_product.sys_create_date",
        wh_category.w_id AS "wh_category.w_id",
        wh_category.category AS "wh_category.category",
        wh_category.sys_create_date AS "wh_category.sys_create_date"
        FROM
            wh_product
        INNER JOIN wh_category ON wh_product.category_id = wh_category.w_id
        WHERE
            wh_product.w_id = ?`,
      [id]
    );
  } else {
    return await dbQuery(
      `SELECT
        wh_product.w_id as "wh_product.w_id",
        wh_product.name as "wh_product.name",
        wh_product.description as "wh_product.description",
        wh_product.unit_price as "wh_product.unit_price",
        wh_product.stock_amount as "wh_product.stock_amount",
        wh_product.category_id as "wh_product.category_id",
        wh_product.warehouse_id as "wh_product.warehouse_id",
        wh_product.sys_create_date as "wh_product.sys_create_date",
        wh_category.w_id as "wh_category.w_id",
        wh_category.category as "wh_category.category",
        wh_category.sys_create_date as "wh_category.sys_create_date"
        FROM wh_product INNER JOIN wh_category on wh_product.category_id = wh_category.w_id;`,
      []
    );
  }
};

module.exports = { getProducts };
