exports.getAllPost = (req, res) => {
  res.send("Render all post");
};


exports.getSinglePost = (req, res) => {
  res.send(`I am post no ${req.params.postId}`);
};

exports.createNewPost = (req, res) => {
  res.send("Create new post");
};

exports.updatePost = (req, res) => {
  res.send("Update your existing post is = " + req.params.postId);
};


exports.deletePost = (req, res) => {
  res.send("Delete your post no = " + req.params.postId);
};