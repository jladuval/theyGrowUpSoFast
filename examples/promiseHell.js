/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var userCollection = db.get('usercollection');

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
  .then(emulator => {
    return getUserFollowersFromUnviewedReceivedSnaps(emulator.unviewedSnaps, user)
  })
  .then(snapData => {
    return saveReceivedSnaps(
      scope.emulator,
      snapData.receivedSnaps,
      snapData.userFollowers,
      user)
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
  .then(emulator => {
    return getUserFollowersFromUnviewedReceivedSnaps(emulator.unviewedSnaps, user)
  })
  .then(snapData => {
    return saveReceivedSnaps(
      scope.emulator,
      snapData.receivedSnaps,
      snapData.userFollowers,
      user)
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
  .then(emulator => {
    return getUserFollowersFromUnviewedReceivedSnaps(emulator.unviewedSnaps, user)
  })
  .then(snapData => {
    return saveReceivedSnaps(
      scope.emulator,
      snapData.receivedSnaps,
      snapData.userFollowers,
      user)
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
