
 // 根据环境变量修改host
 const prodHost = 'https://ssm-blog-okesuzg08-ssm1.vercel.app/';
 const devHost = 'http://localhost:3010/';
 
 // 全局可获取process.env.APP_ENV
 const appEnv = process.env.APP_ENV;
 export const appHost = appEnv=='production'? prodHost : devHost;
 export const breadcrumb = [
    {"name":"祥情", "path":"fdf"},
    {"name":"登陆", "path":"fdf"},
    {"name":"发布", "path":"fdf"},
  ]