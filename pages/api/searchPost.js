const fs = require('fs');
const path = require('path')
const dataFile = path.join(process.cwd(),'data', `posts.json`)

function readJsonData (res,req){

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        } else {
          const jsonData = JSON.parse(data);
          const {title,date} = req.body;
          let result = jsonData?.posts;
          if(title){

            result = jsonData?.posts?.filter((item)=>{
              return item.title.includes(title);
            });
            if(date){
              result = jsonData?.posts?.filter((item)=>{
                return item.date.includes(date);
              });
            }

          }else{

            if(date){
              result = jsonData?.posts?.filter((item)=>{
                return item.date.includes(date);
              });
            }

          }
          
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json({posts:result});
        }
      });
}

export default  function handler(req, res) {
    readJsonData(res,req);
}
