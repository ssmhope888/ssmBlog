import { useState, useEffect,useReducer } from 'react';
import { readFileSync } from 'fs'
import axios from 'axios';
import path from "path"
import Layout from "../components/Layout";
import PostList from "../components/PostList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {appHost} from "../GlobalContext";

const Index = ({ posts }) => {

  const newPost  = JSON.parse(posts)
  const [postList, setPostList] = useState(newPost?.posts);

  useEffect(()=>{
    axios.get(`${appHost}api/getPosts`)
    .then((res)=>{
      const clientData = res?.data?.posts;
      setPostList(clientData) 
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  
  return (
    <Layout pageTitle="My Blog,study blog,blog system,blog website">
      <div className="content-center mt-14">
      <div class="text-center mb-4 font-bold text-lg"><h2>文章列表</h2></div>
      <div>
      <SearchBar className="mb-8" setPostList={setPostList}/>
      </div>
      <PostList posts={postList} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const postsData = readFileSync(path.join(process.cwd(), 'data', `posts.json`), 'utf-8')
  return {
    props: {
      posts: postsData,
    },
  };
}

export default Index;
