import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js ISR on AWS Amplify
        </h1>

        <p className={styles.description}>
          Sample project demonstrating Incremental Static Regeneration
        </p>

        <div className={styles.grid}>
          <Link href="/static" className={styles.card}>
            <h2>Static Page &rarr;</h2>
            <p>Static Site Generation (SSG) example</p>
          </Link>

          <Link href="/isr" className={styles.card}>
            <h2>ISR Page &rarr;</h2>
            <p>Incremental Static Regeneration with 60s revalidation</p>
          </Link>

          <Link href="/products" className={styles.card}>
            <h2>Products (ISR) &rarr;</h2>
            <p>Dynamic product list with ISR</p>
          </Link>

          <Link href="/ssr" className={styles.card}>
            <h2>SSR Page &rarr;</h2>
            <p>Server-Side Rendering example</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js & AWS Amplify</p>
      </footer>
    </div>
  )
}
