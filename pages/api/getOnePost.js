const fs = require('fs');
const path = require('path')
const dataFile = path.join(process.cwd(),'data', `posts.json`)

function readJsonData (res,req){

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        } else {
          const jsonData = JSON.parse(data);
          const {id} = req.query;
          
          const result = jsonData?.posts?.filter((item)=>{
            return item.id === id;
          });
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json({post:result?.[0]});
        }
      });
      
}

export default  function handler(req, res) {
    readJsonData(res,req);
}
