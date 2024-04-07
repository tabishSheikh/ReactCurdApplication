const db = require("../connection");

module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM items`, (err, results) => {
            if (err) return res.sendStatus(500);
            return res.send({ items: results });
        });
    },

    store(req, res) {
        const { category_id, title, description, price, quantity, sku } = req.body.item;
        db.query(`INSERT INTO items (category_id, title, description, price, quantity, sku) VALUES (?, ?, ?, ?, ?, ?)`, 
            [category_id, title, description, price, quantity, sku], 
            (err, result) => {
                if (err) return res.sendStatus(500);
                
                db.query(`SELECT * FROM items`, (err, results) => {
                    if (err) return res.sendStatus(500);
                    return res.send({ items: results });
                });
            }
        );
    },

    update(req, res) {
        const { category_id, title, description, price, quantity, sku } = req.body.item;
        db.query(`UPDATE items SET category_id=?, title=?, description=?, price=?, quantity=?, sku=? WHERE item_id=?`, 
            [category_id, title, description, price, quantity, sku, req.params.item_id], 
            (err, result) => {
                if (err) return res.sendStatus(500);

                db.query(`SELECT * FROM items`, (err, results) => {
                    if (err) return res.sendStatus(500);
                    return res.send({ items: results });
                });
            }
        );
    },

    destroy(req, res) {
        db.query(`DELETE FROM items WHERE item_id=?`, [req.params.item_id], (err, result) => {
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM items`, (err, results) => {
                if (err) return res.sendStatus(500);
                return res.send({ items: results });
            });
        });
    }
};
