const { dbQuery } = require("./dbQuery");

const getRaport = async (req) => {
  return dbQuery(
    `SELECT
        wh_product.w_id as "wh_product.w_id",
        wh_product.name as "wh_product.name",
        wh_product.description as "wh_product.description",
        wh_product.unit_price as "wh_product.unit_price",
        wh_product.stock_amount as "wh_product.stock_amount",
        wh_product.min_stock_amount as "wh_product.min_stock_amount",
        wh_product.max_stock_amount as "wh_product.max_stock_amount",
        wh_product.category_id as "wh_product.category_id",
        wh_product.warehouse_id as "wh_product.warehouse_id",
        wh_product.sys_create_date as "wh_product.sys_create_date",
        wh_category.w_id as "wh_category.w_id",
        wh_category.category as "wh_category.category",
        wh_category.sys_create_date as "wh_category.sys_create_date"
        FROM wh_product INNER JOIN wh_category on wh_product.category_id = wh_category.w_id 
        WHERE stock_amount < min_stock_amount OR stock_amount > max_stock_amount ORDER BY wh_product.sys_create_date ASC`,
    []
  );
};

module.exports = { getRaport };
