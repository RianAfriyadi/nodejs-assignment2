const { databaseLocation } = require("../config/index")
const fs = require('fs');

const getData = () => {
    try {
        const data = fs.readFileSync(databaseLocation+'user-auth.json', 'utf8');
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

module.exports = {
    getData
}