var posts=["2024/09/02/爬虫：获取ins指定用户的粉丝数/","2024/08/31/BUUCTF Basic 解题记录/","2024/09/03/linux命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };