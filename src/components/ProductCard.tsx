'use client'

import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      key={product.id}
      href={`/products/${product.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div 
        style={{
          padding: '1.5rem',
          marginBottom: '1rem',
          background: 'white',
          borderRadius: '8px',
          border: '1px solid #eaeaea',
          transition: 'border-color 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0070f3'}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#eaeaea'}
      >
        <h2 style={{ marginBottom: '0.5rem' }}>{product.name}</h2>
        <p style={{ color: '#666', marginBottom: '0.5rem' }}>{product.description}</p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0070f3' }}>
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
