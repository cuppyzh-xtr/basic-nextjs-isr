import styles from '../page.module.css'

async function getData() {
  // Simulate real-time data fetching
  await new Promise(resolve => setTimeout(resolve, 100))

  return {
    timestamp: new Date().toISOString(),
    serverTime: new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })
  }
}

export default async function SSRPage() {
  const data = await getData()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>SSR Page</h1>
        <p className={styles.description}>
          Server-Side Rendering - always fresh data
        </p>
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
          <p><strong>Server Time:</strong> {data.serverTime}</p>
          <p><strong>Timestamp:</strong> {data.timestamp}</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            This page is rendered on every request. Refresh to see updated time.
          </p>
        </div>
        <a href="/" style={{ marginTop: '2rem', color: '#0070f3' }}>
          ← Back to Home
        </a>
      </main>
    </div>
  )
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'
