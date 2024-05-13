import Layout from "../../components/Layout";
import SubmitForm from "../../components/SubmitForm";
import Breadcrumb from "../../components/Breadcrumb";

function AddPost() {
  
  return (
    <Layout pageTitle='发布文章'>
      <div className="font-bold  my-4"><Breadcrumb  name="发布文章"/></div>
      <div class="flex flex-col   justify-center mt-10" >
      <div class="text-center">文章发布</div>
      <div className="w-300 mt-30">
       <SubmitForm></SubmitForm>
      </div>
      </div>
    </Layout>
  );

}

export function getStaticProps(query) {
  
  return {
    props: {
    },
  };

}

export default AddPost;
