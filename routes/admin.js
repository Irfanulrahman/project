var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"AIRPOSD",
      category:'mobile',
      discription:"is a nyc product By the apple",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcyJEhmArbcT7SNSdFLiOVfBMJ8C9lL3atw&usqp=CAU"
    },
    {
      name:"AIRDOPS",
      category:'mobile',
      discription:"is a nyc product By the BOAT",
      image:"https://images-static.nykaa.com/media/catalog/product/8/c/8c05c8eAirdopes%20131_Ivory%20White_1.jpg?tr=w-500,pr-true"
    },
    {
      name:"AIRbus",
      category:'mobile',
      discription:"is a nyc product By the mi",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4QyACbLZ_eqPwMqgx69hSsENTFvwVH80lA&usqp=CAU"
    },
    {
      name:"jbl",
      category:'mobile',
      discription:"is a nyc product By the apple",
      image:"https://m.media-amazon.com/images/I/41v3MoujxGL._SX522_.jpg"
    }
  ]
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',function(req,res){
  console.log(req.body)
  console.log(req.files.image)
})

module.exports = router;
