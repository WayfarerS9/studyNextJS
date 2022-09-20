import Link from 'next/link'
import MainLayout from '../components/layouts/layout'

export default function Home() {
  return ( <MainLayout>
    <h1>Hello NextJS</h1>
    <p>
      <Link href="/posts">
        <a >
          Posts
        </a>
      </Link>
    </p>
    <p>
      <Link href="/about">
        <a>
          About
        </a>
      </Link>
    </p>
  </MainLayout>)
}
