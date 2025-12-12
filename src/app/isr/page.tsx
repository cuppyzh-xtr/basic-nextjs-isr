import styles from '../page.module.css'

// ISR: Revalidate every 60 seconds
export const revalidate = 60

async function getData() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100))

  return {
    timestamp: new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' }),
    randomNumber: Math.floor(Math.random() * 1000)
  }
}

export default async function ISRPage() {
  const data = await getData()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>ISR Page</h1>
        <p className={styles.description}>
          Incremental Static Regeneration with 60-second revalidation
        </p>
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
          <p><strong>Generated At:</strong> {data.timestamp}</p>
          <p><strong>Random Number:</strong> {data.randomNumber}</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            This page regenerates every 60 seconds when a request is made.
            Refresh to see if the data has updated.
          </p>
        </div>
        <a href="/" style={{ marginTop: '2rem', color: '#0070f3' }}>
          ← Back to Home
        </a>
      </main>
    </div>
  )
}
