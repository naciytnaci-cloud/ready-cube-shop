/**
 * Mağaza Ürünleri
 * 
 * This file contains product data and types for the Ready Cube shop.
 * Products are currently mock data for UI purposes.
 * 
 * Future: This will be replaced with a database or CMS integration.
 */

export type ProductStatus = 'available' | 'coming_soon' | 'out_of_stock' | 'discontinued'

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number | null
  status: ProductStatus
  category: 'bags' | 'cubes' | 'accessories'
  image?: string
  images?: string[]
  features?: string[]
  specifications?: Record<string, string>
  createdAt?: Date
  updatedAt?: Date
}

/**
 * Mock product data for Ready Cube Pro Carry Bag (V2)
 * 
 * This product is currently in "coming soon" status.
 * Price will be set when product launches.
 */
export const readyCubeProBag: Product = {
  id: 'ready-cube-pro-bag-v2',
  name: 'Ready Cube Pro Taşıma Çantası (V2)',
  slug: 'ready-cube-pro-bag',
  description:
    'Hızlı küpçüler için üretildi. Yarışma için tasarlandı. Tüm WCA küpleri ve aksesuarlarına uyacak şekilde tasarlanmış üst seviye taşıma çantası.',
  price: null,
  status: 'coming_soon',
  category: 'bags',
  image: '/products/ready-cube-pro-bag.jpg',
  features: [
    'Tüm WCA küplerine uyumlu',
    'Korumalı köpük iç yapı',
    'Modüler bölmeler',
    'Yarışmaya uygun tasarım',
  ],
  specifications: {
    capacity: 'Tüm WCA küpleri + aksesuarlar',
    material: 'Üst seviye malzemeler',
    dimensions: 'Yakında',
    weight: 'Yakında',
  },
}

/**
 * Get product by slug
 * 
 * Future: This will query a database or CMS
 */
export function getProductBySlug(slug: string): Product | null {
  if (slug === 'ready-cube-pro-bag') {
    return readyCubeProBag
  }
  return null
}

/**
 * Get all products
 * 
 * Future: This will query a database or CMS
 */
export function getAllProducts(): Product[] {
  return [readyCubeProBag]
}

/**
 * Get products by category
 * 
 * Future: This will query a database or CMS
 */
export function getProductsByCategory(category: Product['category']): Product[] {
  return getAllProducts().filter(product => product.category === category)
}

