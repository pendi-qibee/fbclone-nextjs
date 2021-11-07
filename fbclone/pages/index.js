import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import { getSession } from 'next-auth/client';
import Feed from '../components/Feed';

export default function Home({session}) {

  if(!session) return <Login/>;

  return (
    <div>
      <Head>
        <title>Facebook Clone NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Widget */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const session=await getSession(context);

  return {
    props: {
      session
    }
  }
}