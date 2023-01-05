const { databaseLocation } = require("../config/index")
const fs = require('fs');

class ProductController {

    static GetList(req, res) {
        try {
            const data = fs.readFileSync(databaseLocation+'product.json', 'utf8');
            res.status(200).json(JSON.parse(data));
        }  catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = ProductController