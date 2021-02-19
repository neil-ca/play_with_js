import Link from 'next/link'

export default function HomePage() {
    return (
        <div>
            <h1>Hello</h1>
            <Link href="/about"><a>about me</a></Link>
        </div>
    )
}