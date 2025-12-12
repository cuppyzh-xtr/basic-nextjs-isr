import styles from '../page.module.css'

export default function StaticPage() {
  const buildTime = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Static Page (SSG)</h1>
        <p className={styles.description}>
          This page was generated at build time
        </p>
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
          <p><strong>Build Time:</strong> {buildTime}</p>
          <p style={{ marginTop: '1rem' }}>
            This page is statically generated once during the build process.
          </p>
        </div>
        <a href="/" style={{ marginTop: '2rem', color: '#0070f3' }}>
          ← Back to Home
        </a>
      </main>
    </div>
  )
}
