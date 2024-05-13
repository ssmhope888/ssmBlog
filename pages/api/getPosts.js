const fs = require('fs');
const path = require('path')
const dataFile = path.join(process.cwd(),'data', `posts.json`)

function readJsonData (res){

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        } else {
          const jsonData = JSON.parse(data);
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json({ posts: jsonData?.posts });
        }
      });

}

export default  function handler(req, res) {
    readJsonData(res);
}

export  function getPosts(req, res) {
  readJsonData(res);
}