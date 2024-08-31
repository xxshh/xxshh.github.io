var posts=["2024/08/31/blog/my-blog/","2024/08/31/my-blog/","2024/08/31/test/","2024/08/31/Obsidian Vault/BUUCTF/BUUCTF Basic 解题记录/","2024/08/31/blog/欢迎/","2024/08/31/Obsidian Vault/app推广/Thegreenwhale下载教程/","2024/08/23/HELLO WORLD/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };