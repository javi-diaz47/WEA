const controller = {};

// USERS


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Users', (err, users) => {
            if(err){
                res.json(err);
            }

            res.send(users)

        });
    });
};

controller.login = (req, res) => {
    console.log('\n\nRecived:');
    
    // const data = JSON.parse(JSON.stringify(req.body)));
    console.log(req.body)

    const {email, password} = req.body;

    req.getConnection((err, conn) => {
        conn.query(`
    SELECT * FROM Users
    WHERE email='${email}';
        `, (err, user) => {
            if(err){
                res.json(err);
            }
            //[0]
            //That is because user is a RowDataPacker which is and array
            console.log(user[0]);
            console.log(user[0].email);
            if(user[0].password === password){
                // console.log('LOGGED');
                res.send(user[0]);
            }else{
                res.json({login: false})
            }
        })

    })


}


// POSTS

controller.listPost = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Post', (err, users) => {
            if(err){
                res.json(err);
            }

            res.send(users)

        });
    });
};


controller.listPostCategory = (req, res) => {
    
    // const data = JSON.parse(JSON.stringify(req.body)));
    console.log(req.body)

    if(req.body != undefined){
        const {category} = req.body;

        req.getConnection((err, conn) => {
            conn.query(`
                SELECT * FROM Post
                WHERE category='${category}';
            `, (err, posts) => {
                if(err){
                    res.json(err);
                }
                
                console.log(posts);

                if(posts == []){
                    res.json({status: false})
                }else{
                    res.json(posts);
                }

            })

        })


    }

}




module.exports = controller;