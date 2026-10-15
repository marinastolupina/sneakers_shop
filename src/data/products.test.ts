import { describe, it, expect } from 'vitest'
import { products } from './products'
import { MAX_PRODUCT_PRICE, MIN_PRODUCT_PRICE } from '../constants' 

describe('Наличие данных о товаре (Data Integrity)', () => {

  describe('Проверка каждого товара', () => {
    products.forEach((product) => {
      
      it(`[${product.id}] ${product.brand} ${product.name}`, () => {
      // 1. Check price
        expect(product.price, `Цена товара ${product.name} должна быть >= ${MIN_PRODUCT_PRICE}`).toBeGreaterThanOrEqual(MIN_PRODUCT_PRICE)
        expect(product.price, `Цена товара ${product.name} не должна превышать ${MAX_PRODUCT_PRICE}`).toBeLessThanOrEqual(MAX_PRODUCT_PRICE)

       // 2. Check text fields: brand, name, description
      expect(product.brand).toBeTruthy()
      expect(product.name).toBeTruthy()
      expect(product.description).toBeTruthy()       

        // 3. Check sizes availability
      expect(Array.isArray(product.sizes)).toBe(true)
      expect(product.sizes.length).toBeGreaterThan(0)
      
      // 4. Check purpose availability
      expect(product.purpose.length).toBeGreaterThan(0)
      
      // 5. Check images availability
      expect(Array.isArray(product.images)).toBe(true)
      expect(product.images.length).toBeGreaterThan(0)
    })
  })
})  
})