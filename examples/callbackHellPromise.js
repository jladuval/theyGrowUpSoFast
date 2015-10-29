/* POST to Add User Service */
router.post('/adduser', (req, res) => {

  // Set our internal DB variable
  const db = req.db

  // Get our form values. These rely on the "name" attributes
  const userName = req.body.username
  const userEmail = req.body.useremail

  // Set our collection
  let userCollection = db.get('usercollection')

  userCollection.insert({
    username: userName,
    email: userEmail
  })
    .then(doc => {
      return permissionsCollection.insert({
        username: userName,
        manageUsers: false
      })
    })
    .then(doc => userImageApi.getUserImage(userName))
    .then(res => {
      return userCollection.update({
        "username" : userName,
        "email" : userEmail,
        "image": res.imageUrl
      })
    })
    .then(() => res.redirect("userlist"))
    .catch(err => {
      console.error(err)
      res.send('an error occurred')
    })
})
