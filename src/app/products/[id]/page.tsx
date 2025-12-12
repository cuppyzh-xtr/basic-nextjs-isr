import styles from '../../page.module.css'

// ISR with 60 second revalidation
export const revalidate = 60

interface Product {
  id: number
  name: string
  price: number
  description: string
  details: string
}

async function getProduct(id: string): Promise<Product> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const products: Record<string, Product> = {
    '1': { id: 1, name: 'Product A', price: 29.99, description: 'Amazing product A', details: 'This is an amazing product with great features.' },
    '2': { id: 2, name: 'Product B', price: 49.99, description: 'Fantastic product B', details: 'A fantastic choice for your needs.' },
    '3': { id: 3, name: 'Product C', price: 19.99, description: 'Great product C', details: 'Great value for money.' },
    '4': { id: 4, name: 'Product D', price: 99.99, description: 'Premium product D', details: 'Premium quality and features.' },
  }
  
  return products[id] || products['1']
}

// Generate static params for ISR
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  const generatedAt = new Date().toLocaleString()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <div style={{ marginTop: '2rem', padding: '2rem', background: 'white', borderRadius: '8px', maxWidth: '600px' }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0070f3', marginBottom: '1rem' }}>
            ${product.price}
          </p>
          <p style={{ marginBottom: '1rem' }}>{product.details}</p>
          <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #eaeaea' }} />
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Generated at: {generatedAt}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.5rem' }}>
            ISR: Revalidates every 60 seconds
          </p>
        </div>
        <a href="/products" style={{ marginTop: '2rem', color: '#0070f3' }}>
          ← Back to Products
        </a>
      </main>
    </div>
  )
}
