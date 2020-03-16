var User = require('../controllers/userController')

module.exports = (router) => {
    router.get('/api/getUser', User.getUser);
}