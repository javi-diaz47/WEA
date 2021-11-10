const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Users', (err, users) => {
            if(err){
                res.json(err);
            }

            res.sendFile();

        });
    });

};

module.exports = controller;