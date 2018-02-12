var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
// router.get('/same', function(req, res, next) {
//   res.send ("sara");
// });
// router.get ('/rain', function (req,res,next) {res.send('index')};
router.get('/api', function (req, res) {

    var obj = [{name:"The volcano photos of photographer Miles Morgan",img1:"https://petapixel.com/assets/uploads/2013/07/burning.jpg", desc:"Photographer Gets So Close to Lava That His Shoes and Tripod Catch on Fire", LINK:"https://petapixel.com/2013/07/13/photographer-gets-so-close-to-lava-that-his-shoes-and-tripod-catch-on-fire/"}];
    res.json(obj);
}); // رجعلي هاي ال obj بصيغه جيسون
//ممكان اخلي ببدال الاوبجت مصفوفه واخلي    res.json(rr)
// وطبعا اني مااخلي مصفوفه لو اوبجكت بس اخلي اسمهم الي اني سويته

module.exports = router; // لازم هاي اخر شي لان معنا يطلع


// ثم اطفي السيرفر وارجع اشغله راح تطلعلي صفحه الاندكس
