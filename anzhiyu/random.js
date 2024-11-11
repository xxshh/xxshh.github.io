var posts=["2024/09/06/BUUCTF-Web-解题记录/","2024/11/03/Hackergame-2024-Web/","2024/08/31/BUUCTF Basic 解题记录/","2024/10/25/NewStar-CTF-2024-Week1-Web/","2024/10/27/NewStar-CTF-2024-Week2-Web/","2024/11/05/Node.js原型链污染/","2024/09/03/linux命令/","2024/09/02/爬虫：获取ins指定用户的粉丝数/","2024/10/18/知识点汇总/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };