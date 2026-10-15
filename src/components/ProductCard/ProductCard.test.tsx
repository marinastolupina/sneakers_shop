import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import { FavoritesProvider } from '../../context/FavoritesContext'
import { describe, it, expect } from 'vitest'
import { products } from '../../data/products'

describe('ProductCard', () => {
  
  describe('Отображение данных и базовый функционал', () => {
    products.forEach((product) => {
      it(`корректно отображает данные для: ${product.brand} ${product.name}`, () => {
        
        render(
          <BrowserRouter>
            <FavoritesProvider>
              <ProductCard product={product} />
            </FavoritesProvider>
          </BrowserRouter>
        )

        // 1. Check brand and name
        expect(screen.getByText(product.brand)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(product.name, 'i'))).toBeInTheDocument()

        // 2. Check price formatting
        const priceElement = screen.getByTestId('product-price')
        expect(priceElement.textContent?.trim()).toBe(`${product.price.toLocaleString('ru-RU')} р`)

        // 3. Check image
        const image = screen.getByAltText(`Кроссовки ${product.brand} ${product.name}`)
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', product.images[0])

        // 4. Check favorite button (presence and accessibility)
        const favoriteButton = screen.getByLabelText('Добавить в избранное')
        expect(favoriteButton).toBeInTheDocument()
        expect(favoriteButton).toHaveAttribute('aria-label', 'Добавить в избранное')
        
      })
    })
  })
})