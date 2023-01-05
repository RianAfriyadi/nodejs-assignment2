const { getData } = require("../models/user-auth")
const { generateToken } = require("../middlewares/jwt")

class UserAuthController {

    static Login(req, res) {
        const{username, password} = req.body
        const list = getData()
        let found = false
        list.forEach(itm => {
            if(found) {
                return
            }
            
            if(itm.username == username && itm.password == password) {
                found = true
            }
        });
        
        if(found) {
            const token = generateToken({
                username: username,
                password: password
            })
            res.status(200).json({
                token: token
            });
        } else {
            res.status(401).json({
                message: "Invalid username or password"
            });
        }
        
    }

    // static GetList(req, res) {
    //     const list = getData()
    //     res.status(200).json(list);
    // }
}

module.exports = UserAuthController