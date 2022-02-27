var express = require('express');
var router = express.Router();
var userData = require('../data/userData.js')
const jwt = require('jsonwebtoken')


// 生成token

const createJwt = (payload, secret, expire)=>{
  return jwt.sign({
    ...payload
  }, secret, {
    expiresIn: new Date().getTime() + expire // millissecond
  })
}


/* login. */
router.post('/api/login', (req, res, next)=>{
  const { account, password } = req.body
  const index =  userData.findIndex(item=>item.account === account)
  if(index !== -1){
    // 创建token
    const token = createJwt({account: 'account'}, account, 1000*60) // 1分钟过期
    userData[index].token = token
    console.log(token);
    res.send({
      code: 200,
      data: {
        msg: 'success',
        token: token,
        userName: account
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




module.exports = router;
