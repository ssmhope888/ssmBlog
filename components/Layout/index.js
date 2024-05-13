import Head from "next/head";
import ActiveLink from "../ActiveLink";
import Link from "next/link";


function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="blog,my blog,good blog,study blog"/>
        <meta name="description" content="这是我基于面试任务开发blog系统"/>
        <meta name="author" content="沈先生"/>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h-16 border-b border-purple-500 flex items-center justify-center">
          <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
            <div className="text-2xl text-purple-500">
              <ActiveLink href="/"><a>沈先生的博客系统</a></ActiveLink>
            </div>
            <AppNav />
          </div>
        </header>
        <main class="flex items-start justify-center h-screen scrollbar-container">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-center w-full h-24 text-gray-600 border-t border-purple-500">
          <div className="mt-2">我的联系方式: 1505041545@qq.com</div>
        </footer>
      </div>
    </>
  );

}

function AppNav() {

  return (
    <nav className="text-2xl text-gray-600">
      <ActiveLink href="/about" activeClassName="text-purple-500">
        <a className="hover:text-purple-500">About Me</a>
      </ActiveLink>
    </nav>
  );

}

export default Layout;
