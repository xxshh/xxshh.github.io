var posts=["2024/08/31/BUUCTF Basic 解题记录1/","2024/08/31/BUUCTF Basic 解题记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };