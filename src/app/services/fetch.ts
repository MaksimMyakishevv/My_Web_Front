import { Product } from '../types/product'

const BASE = 'http://127.0.0.1:3001/api/'

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${BASE}product/all`)
    if (!res.ok) throw new Error('Ошибка загрузки товаров')
    return res.json()
}