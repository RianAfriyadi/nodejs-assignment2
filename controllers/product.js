class ProductController {

    static GetList(req, res) {
        try {
            const arr = [
                {
                    "code":"ABC",
                    "name":"Kecap ABC"
                }
            ];
            res.status(200).json(arr);
        }  catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = ProductController