var User = require('../controllers/userController')

module.exports = (router) => {
    router.get('/api/getUser', User.getUser);
    router.get('/api/fetchUser/:id', User.fetchUser);
    router.post('/api/addUser', User.addUser);
}