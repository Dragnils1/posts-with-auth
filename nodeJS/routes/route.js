const Router = require('express').Router;
const {body} = require('express-validator');
const router = new Router()
// const userController = require('../controllers/user-controller');
// const authMiddleware = require('../middleware/auth-middleware');
const ArticleController = require('../controllers/article-controller')


require("../db/mainDb")

// router.post('/registration',
//     body('email').isEmail(),
//     body('password').isLength({min: 3, max: 32}),
//     userController.registration
// );
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);
router.post("/user/email", ArticleController.userEmail)
router.get("/g", ArticleController.g)
// router.get('/activate/:link', userController.activate);
// router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, userController.getUsers);

router.get("/", function(req, res){
  res.json([
    {
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }, {
    id: 3,
    title: "Пусть будет первым щаголовком",
  }, {
    id: 4,
    kategory: "администрирование",
  }, {
    id: 5,
    text: "бла бла бла",
  }, {
    id: 6,
    text2: "бибилда",
  }, {
    id: 7,
    imgSrc: "https://sun9-43.userapi.com/impg/yB-6Nd4jm1tat-c-SJj_bnFTWmpBKojKQGeqtw/AhVT-AzlY9M.jpg?size=604x602&quality=96&sign=133ad21effe6f5eedd7270129e2e4706&type=album",
  }, {
    id: 8,
    title2: "а это второй заголовок"
  }, {
    id: 9,
    views: 123,
  }
]);
});


module.exports = router