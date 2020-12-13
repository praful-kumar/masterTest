const express = require('express');

const router = express.Router();

const postModal = require('./users');


router.get('/', (req, res) => {
  postModal.find()
    .then((postsData) => {
      res.render('index', { posts: postsData });
    })
})

router.get('/write', (req, res) => {
  res.render('write')
})

router.post('/writeposts', (req, res) => {
  postModal.create({
    post:req.body.post
  })
    .then((createdpost) => {
      res.redirect('/')
    })
});

/*-------delete route-------*/
router.get('/delete/:_id',(req, res)=>{
  postModal.findOneAndDelete({_id:req.params._id})
  .then((deluser)=>{
    res.redirect('/')
  })
});



/*-----------update route------*/

router.get('/update/:_id',(req, res)=>{
  postModal.findOne({_id:req.params._id})
  .then((foundpost)=>{
    res.render('update',{post:foundpost})
  })
});
router.post('/save/:_id',(req, res)=>{
  postModal.findByIdAndUpdate({_id:req.params._id},{post:req.body.post},{new:true})
  .then((postupdated)=>{
    res.redirect('/')
  })
})




module.exports = router;
