/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var userCollection = db.get('usercollection');

    // Submit to the DB
    userCollection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            var permissionsCollection = db.get('permissionscollection')

            permissionsCollection.insert({
              "username": userName,
              "manageUsers": false
            }, function (err, permissionDoc) {
                if (err) {
                    // If it failed, return error
                    res.send("There was a problem adding the information to the database.");
                }
                else {
                    userImageApi.getUserImage(userName, function(err, res) {
                        if (err) {
                            // If it failed, return error
                            res.send("There was a problem adding the information to the database.");
                        }
                        else {
                            userCollection.update({
                                "username" : userName,
                                "email" : userEmail,
                                "image": res.imageUrl
                            }, function(err, doc) {
                              wtf.is().going().on()
                            })
                        }
                  })
              }

            })
        }
    });
	});
