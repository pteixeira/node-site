var express = require('express');
var path = require('path');

var router = express.Router();

// route app - homepage
router.get('/', function(request, response) {
  // response.sendFile(path.join(__dirname + './../index.html'));
  response.render('pages/home');
});

// route for about page
router.get('/about', function(request, response) {
  var users = [
    { name: 'Holly', email: 'holly@test.pt', avatar: 'http://placehold.it/300x300' },
    { name: 'Derp', email: 'derp@test.pt', avatar: 'http://placehold.it/400x400' },
    { name: 'Chris', email: 'chris@test.pt', avatar: 'http://placehold.it/500x500' },
    { name: 'Sam', email: 'Sam@test.pt', avatar: 'http://placehold.it/600x600' }
  ];
  response.render('pages/about', {users: users});
});

router.get('/contact', function(request, response) {
  response.render('pages/contact');
});

router.post('/contact', function(request, response) {
  response.send("Thanks for contacting us, " + request.body.name + '! We will respond shortly!');
});


// export router
module.exports = router;
