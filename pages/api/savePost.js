const fs = require('fs');
const path = require('path')
const dataFile = path.join(process.cwd(),'data', `posts.json`)

function saveJsonData (res,req){

  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      let jsonData =  JSON.parse(data);
      jsonData?.posts?.push(req.body)
      fs.writeFile(dataFile, JSON.stringify(jsonData) , 'utf8', (err) => {
        if (err) throw err;
        console.log('JSON data has been written to file.');
      });
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ posts: jsonData?.posts });
    }
  });
  
}

export default function handler(req, res) {
  saveJsonData (res,req);
}