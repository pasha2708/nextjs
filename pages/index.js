import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/mainLayout'

export default function Index() {
  return (
    <MainLayout>
    <Head>
      <title>Next title index hello</title>
    </Head>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href="/posts"><a>Posts</a></Link></p>
      <h1>Hello Next.js</h1>

    </MainLayout>
  )
}