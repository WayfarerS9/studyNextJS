import Link from 'next/link'

export default function Home() {
  return ( <>
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
  </>)
}
