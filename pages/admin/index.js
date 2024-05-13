import Layout from "../../components/Layout";
import LoginForm from "../../components/Login";
import Breadcrumb from "../../components/Breadcrumb";

function Admin() {
  return (
    <Layout pageTitle='发布文章'>
      <div className="font-bold  my-4"><Breadcrumb  name="管理后台"/></div>
      <div class="flex flex-col   justify-center mt-10">
      <div class="text-center mb-30">管理员登陆</div>
      <p>管理员：admin</p>
      <p>登陆密码：ssm123</p>
      <div className="w-300 mt-30">
       <LoginForm></LoginForm>
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

export default Admin;
