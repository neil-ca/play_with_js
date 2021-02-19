import Link from 'next/link'
import styles from './about.module.css'
function About() {
    return (
        <div>
            <h1 className={styles.title}>Hello</h1>
            <Link href="/"><a>|Go to home|</a></Link>
        </div>
    )
}
export default About