import styles from './page.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.description}>
                    Page Not Found - Custom one bro
                </p>
                <div style={{ marginTop: '2rem', padding: '2rem', background: 'white', borderRadius: '8px', maxWidth: '600px', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                    <p style={{ color: '#666' }}>
                        The page may have been moved or deleted.
                    </p>
                </div>
                <a href="/" style={{ marginTop: '2rem', color: '#0070f3', fontSize: '1.1rem' }}>
                    ← Back to Home
                </a>
            </main>
        </div>
    )
}
