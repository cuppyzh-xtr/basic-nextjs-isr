import styles from '../page.module.css'
import ProductCard from '@/components/ProductCard'

// ISR with 30 second revalidation
export const revalidate = 30

interface Product {
  id: number
  name: string
  price: number
  description: string
}

async function getProducts(): Promise<Product[]> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return [
    { id: 1, name: 'Product A', price: 29.99, description: 'Amazing product A' },
    { id: 2, name: 'Product B', price: 49.99, description: 'Fantastic product B' },
    { id: 3, name: 'Product C', price: 19.99, description: 'Great product C' },
    { id: 4, name: 'Product D', price: 99.99, description: 'Premium product D' },
  ]
}

export default async function ProductsPage() {
  const products = await getProducts()
  const generatedAt = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Products</h1>
        <p className={styles.description}>
          Product list with ISR (30s revalidation)
        </p>
        <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
          Generated at: {generatedAt}
        </div>
        <div style={{ marginTop: '2rem', width: '100%', maxWidth: '600px' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/" style={{ marginTop: '2rem', color: '#0070f3' }}>
          ← Back to Home
        </a>
      </main>
    </div>
  )
}
