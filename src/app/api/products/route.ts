import { NextResponse } from 'next/server'

interface Product {
  id: number
  name: string
  price: number
  description: string
  inStock: boolean
}

const products: Product[] = [
  { id: 1, name: 'Product A', price: 29.99, description: 'Amazing product A', inStock: true },
  { id: 2, name: 'Product B', price: 49.99, description: 'Fantastic product B', inStock: true },
  { id: 3, name: 'Product C', price: 19.99, description: 'Great product C', inStock: false },
  { id: 4, name: 'Product D', price: 99.99, description: 'Premium product D', inStock: true },
  { id: 5, name: 'Product E', price: 39.99, description: 'Excellent product E', inStock: true },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const product = products.find(p => p.id === parseInt(id))
    if (product) {
      return NextResponse.json(product)
    }
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(products)
}
