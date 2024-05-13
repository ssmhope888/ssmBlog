import Layout from "../../components/Layout";
import axios from 'axios';
import {appHost} from "../../GlobalContext";
import Breadcrumb from "../../components/Breadcrumb";

function Post({ post }) {

  if (!post) return <></>;


  return (
    <Layout pageTitle={post.title}>
      <div className="font-bold  my-4"><Breadcrumb  name="文章祥情"/></div>
      <div class="flex flex-col  items-center justify-center mt-10">
        <div class="text-xl mb-5 mt-5">
          <h1>文章祥情</h1>
        </div>
        <article className="prose max-w-none mt-5">
          <p>文章标题：{post.title}</p>
          <p className="italic">发布日期：{post.date}</p>
          <p>文章内容：</p>
          <p className="italic">{post.description}</p>
          {/* <ReactMarkdown source={post.description} /> */}
        </article>
      </div>
    </Layout>
  );

}

export async function getStaticPaths() {
  const paths = [
  ].map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(query) {

  const id = query.params?.id;
  const {data} = await axios.get(`${appHost}api/getOnePost?id=${id}`)

  return {
    props: {
      post:data?.post
    },
  };

}

export default Post;
