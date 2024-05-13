import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router'
import {appHost} from "../GlobalContext";

function  SearchBar({setPostList}) {

  const router = useRouter();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const  handleSubmit = () => {
    axios.post(`${appHost}api/searchPost`,{
      title: title,
      date: date
    }).then(function (response) {
      setPostList(response?.data?.posts)
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <form  >
      <div className="content-center" style={{marginBottom:'48px'}}>
      <TextField
        id="standard-name"
        label="标题"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        margin="normal"
        style={{marginRight:'24px'}}
      />
      <TextField
        id="standard-uncontrolled"
        label="日期"
        value={date}
        margin="normal"
        onChange={(event) => setDate(event.target.value)}
        style={{marginRight:'24px'}}
      />
       <Button style={{marginTop: '30px',marginRight:'24px'}} onClick={handleSubmit} variant="contained" color="primary">
        查询
      </Button>
      <Button onClick={()=>router.push('/admin')} style={{marginTop: '30px'}}  variant="contained" color="primary" >
        发贴
      </Button>
      </div>
      
    </form>
  );

}

export default SearchBar;
