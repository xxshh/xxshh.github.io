var posts=["2024/08/23/BUUCTF Basic 解题记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };