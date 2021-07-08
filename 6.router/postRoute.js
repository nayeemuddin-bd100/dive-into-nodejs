const router = require('express').Router()

const {getAllPost,getSinglePost,createNewPost,updatePost,deletePost} = require('./postController')

/*

query string 
posts/?category=tech&page=10&filter=latest 

query string er maddome request er shate extra kisu information pass kora jai . jemon post er shate category konta hobe page konta hobe shb bole dewaa ase !

*/






//example.com/posts GET --> for all post

router.get('/',getAllPost )

// router.get('/', (req, res) => {
//     res.send('Render all post')
// })

// for specific post

router.get("/:postId",getSinglePost );

// router.get("/:postId", (req, res) => {
//   res.send(`I am post no ${req.params.postId}`);
// });

// example.com/posts POST
router.post('/', createNewPost)



router.put('/:postId', updatePost)

router.delete('/:postId', deletePost)



module.exports = router