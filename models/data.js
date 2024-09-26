const db = require('../config/db');
const stud_info = {
    save: (data, callback) => {
        const query = "INSERT INTO stud_info ( first_name, last_name, program, address) VALUES (?, ?, ?, ?)";
        db.query(query, [data.first_name, data.last_name, data.program, data.address], callback);

    },
    getAllInformation:(callback) => {
        const query = "SELECT * FROM stud_info";
        db.query(query, callback);
    }
};

module.exports = stud_info;