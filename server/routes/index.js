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

router.get('/api/goods', function(req, res, next) {
  console.log(req.query);
  res.send({
    code: 0,
    data: [
      { id: 4, name:'旺仔牛奶', info:'超级好吃的旺仔牛奶！！！', price:'7.9', imgUrl:'/images/goods/旺仔牛奶.webp', tag: '老铁推荐'},
      { id: 5, name:'箱子', info:'航天限定', price:'59.9', imgUrl:'/images/goods/箱子.webp', tag: '爆款'},
      { id: 6, name:'鞋子', info:'舒适透气', price:'399', imgUrl:'/images/goods/鞋子.webp', tag: '销冠款'},
      { id: 7, name:'旺仔牛奶', info:'超级好吃的旺仔牛奶！！！', price:'7.9', imgUrl:'/images/goods/旺仔牛奶.webp', tag: '老铁推荐'},
      { id: 8, name:'箱子', info:'航天限定', price:'59.9', imgUrl:'/images/goods/箱子.webp', tag: '爆款'},
      { id: 9, name:'鞋子', info:'舒适透气', price:'399', imgUrl:'/images/goods/鞋子.webp', tag: '销冠款'},
      { id: 10, name:'旺仔牛奶', info:'超级好吃的旺仔牛奶！！！', price:'7.9', imgUrl:'/images/goods/旺仔牛奶.webp', tag: '老铁推荐'},
      { id: 11, name:'箱子', info:'航天限定', price:'59.9', imgUrl:'/images/goods/箱子.webp', tag: '爆款'},
      { id: 12, name:'鞋子', info:'舒适透气', price:'399', imgUrl:'/images/goods/鞋子.webp', tag: '销冠款'},
      { id: 13, name:'旺仔牛奶', info:'超级好吃的旺仔牛奶！！！', price:'7.9', imgUrl:'/images/goods/旺仔牛奶.webp', tag: '老铁推荐'},
      { id: 14, name:'箱子', info:'航天限定', price:'59.9', imgUrl:'/images/goods/箱子.webp', tag: '爆款'},
      { id: 15, name:'鞋子', info:'舒适透气', price:'399', imgUrl:'/images/goods/鞋子.webp', tag: '销冠款'},
    ]
  })
});

// 分类页数据

router.get('/api/category', function(req, res, next) {
  res.send({
    code: 200,
    data: [
      { 
        id: 1, 
        title: '推荐分类', 
        list: [
          { id:0 , imgUrl: '/images/goods/iphone.jpg', name: '耳机'}, 
          { id:1, imgUrl: '/images/goods/iphone.jpg', name: '游戏本'},
          { id:2, imgUrl: '/images/goods/iphone.jpg', name: '手机'},
        ]
      },
      { 
        id: 2, 
        title: '电脑办公', 
        list: [
          { id:0 , imgUrl: '/images/goods/iphone.jpg', name: '设计师电脑'}, 
          { id:1, imgUrl: '/images/goods/iphone.jpg', name: '游戏本'},
          { id:2, imgUrl: '/images/goods/iphone.jpg', name: '轻薄本'},
        ]
      },
      { 
        id: 3, 
        title: '手机', 
        list: [
          { id:0 , imgUrl: '/images/goods/iphone.jpg', name: 'iphone'}, 
          { id:1, imgUrl: '/images/goods/iphone.jpg', name: '小米'},
          { id:2, imgUrl: '/images/goods/iphone.jpg', name: '华为'},
          { id:3, imgUrl: '/images/goods/iphone.jpg', name: 'oppo'},
          { id:4, imgUrl: '/images/goods/iphone.jpg', name: 'vivo'},
        ]
      },
      { 
        id: 4, 
        title: '电器', 
        list: [
          { id:0 , imgUrl: '/images/goods/iphone.jpg', name: '格力'}, 
          { id:1, imgUrl: '/images/goods/iphone.jpg', name: '美的'},
          { id:2, imgUrl: '/images/goods/iphone.jpg', name: '松下'},
          { id:3, imgUrl: '/images/goods/iphone.jpg', name: '西门子'},
          { id:4, imgUrl: '/images/goods/iphone.jpg', name: '小米'},
        ]
      },
    ]
  })
});

// 

const searchInfo = (id)=>{
  if(id === 1){
    return {
      code: 200,
      data: {
        id: 1,
        name: '鞋子',
        info: '百搭韩版',
        price: 199,
        support: [
          '满99包邮',
          '48小时发货'
        ],
        image: [
          '/images/goods/%E9%9E%8B%E5%AD%90detail1.webp',
          '/images/goods/%E9%9E%8B%E5%AD%90detail2.webp',
          '/images/goods/%E9%9E%8B%E5%AD%90detail3.webp',
          '/images/goods/%E9%9E%8B%E5%AD%90detail4.webp',
        ]
      }
    }
  }
  else 
  return {
    code: 200,
    data: {
      id: id,
      name: '布鞋',
      info: '百搭韩版',
      price: 99,
      support: [
        '满99包邮',
        '48小时发货'
      ],
      image: [
        '/images/goods/%E9%9E%8B%E5%AD%90detail1.webp',
        '/images/goods/%E9%9E%8B%E5%AD%90detail2.webp',
        '/images/goods/%E9%9E%8B%E5%AD%90detail3.webp',
        '/images/goods/%E9%9E%8B%E5%AD%90detail4.webp',
      ]
    }
  }
}

router.get('/api/detail/:id', function(req, res, next) {
  console.log(req.params);

  // 根据id查找商品信息
  const goodInfo = searchInfo(Number(req.params.id))

  res.send(goodInfo)
});



router.post('/api/login', (req, res, next)=>{
  const { account, password } = req.body
  console.log(account, password);
  if(account === 'admin' && password === '1'){
    res.send({
      code: 200,
      data: {
        msg: 'success',
        token: 'successToken',
        userName: 'kelokeloo'
      }
    })
  }
  else {
    res.send({
      code: 404,
      data: {
        msg: 'failed',
        token: ''
      }
    })
  }
})

// 购物车数据
router.get('/api/shopCar', (req, res, next)=>{
  res.send({
    code: 200,
    data: [
      {
        id: 0,
        choice: true,
        imgUrl: '/images/goods/太空人.webp',
        title: '太空人',
        price: 39,
        count: 1
      },
      {
        id: 1,
        choice: false,
        imgUrl: '/images/goods/鞋子.webp',
        title: '鞋子',
        price: 99,
        count: 2
      },
      {
        id: 2,
        choice: false,
        imgUrl: '/images/goods/旺仔牛奶.webp',
        title: '旺仔牛奶',
        price: 7,
        count: 10
      },
    ]
  })
})



module.exports = router;
