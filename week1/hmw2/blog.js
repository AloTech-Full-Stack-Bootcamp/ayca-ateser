const posts = [
    { title: "Post 1", detail: "Blog Post 1" },
    { title: "Post 2", detail: "Blog Post 2" },
    { title: "Post 3", detail: "Blog Post 3" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
      console.log(post.title);
    });
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newPost);
      //reject("Something went wrong");
    });
  
    return promise1;
  };
  
  addPost({ title: "Post 4", detail: "Blog Post 4" })
  addPost({ title: "Post 5", detail: "Blog Post 5" })
    .then(() => {
      console.log("New Posts");
      listPosts();
    })
    .catch((error) => {
      console.log(error);
    });
  
  listPosts();