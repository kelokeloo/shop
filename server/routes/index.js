var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/home/recommend/scoll', function(req, res, next) {
  res.send({
    code: 200,
    data: [
      { imgUrl: '/images/scroll/1.jpg', goodId: 0},
      { imgUrl: '/images/scroll/2.jpg', goodId: 1},
      { imgUrl: '/images/scroll/3.jpg', goodId: 2},
      { imgUrl: '/images/scroll/4.jpg', goodId: 3},
    ]
  })
});

router.get('/api/home/recommend/hot', function(req, res, next) {
  res.send({
    code: 0,
    data: [
      { id: 1, name:'薯片', info:'超级好吃的薯片！！！', price:'7.9', imgUrl:'/images/goods/薯片.webp', tag: '老铁推荐'},
      { id: 2, name:'太空人', info:'航天限定', price:'39.9', imgUrl:'/images/goods/太空人.webp', tag: '爆款'},
      { id: 3, name:'袜子', info:'暖和', price:'3.9', imgUrl:'/images/goods/袜子.webp', tag: '销冠款'}
    ]
  })
});

router.get('/api/home/recommend/guess', function(req, res, next) {
  res.send({
    code: 0,
    data: [
      { id: 1, name:'薯片', info:'超级好吃的薯片！！！', price:'7.9', imgUrl:'/images/goods/薯片.webp', tag: '老铁推荐'},
      { id: 2, name:'太空人', info:'航天限定', price:'39.9', imgUrl:'/images/goods/太空人.webp', tag: '爆款'},
      { id: 3, name:'袜子', info:'暖和', price:'3.9', imgUrl:'/images/goods/袜子.webp', tag: '销冠款'}
    ]
  })
});


module.exports = router;
