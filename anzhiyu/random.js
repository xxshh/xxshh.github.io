var posts=["2024/11/12/BUUCTF-N1BOOK/","2024/08/31/BUUCTF Basic 解题记录/","2024/09/06/BUUCTF-Web-WP1/","2024/11/11/BUUCTF-Web-WP2/","2024/11/03/Hackergame-2024-Web/","2024/10/25/NewStar-CTF-2024-Week1-Web/","2024/10/27/NewStar-CTF-2024-Week2-Web/","2024/11/05/Node.js原型链污染/","2024/11/15/PHP反序列化/","2024/09/03/linux命令/","2024/11/20/反弹SHELL/","2024/09/02/爬虫：获取ins指定用户的粉丝数/","2024/11/23/文件上传漏洞/","2024/11/22/基础知识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };