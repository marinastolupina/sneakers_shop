import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import './Cart.css';

export const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    selectedItems,
    toggleItemSelected,
    selectAllItems,
    deselectAllItems,
    areAllItemsSelected
  } = useCart();


  const cartWithDetails = useMemo(() => {
    return cartItems.map(item => {
      const product = products.find(p => p.id === item.productId);
      return { ...item, product };
    }).filter(item => item.product);
  }, [cartItems]);

  const handleToggleSelect = (productId: number, size: number) => {
    toggleItemSelected(productId, size);
  };


  const handleSelectAll = () => {
    if (areAllItemsSelected(cartWithDetails.length)) {
      deselectAllItems();
    } else {
      selectAllItems();
    }
  };


  const handleRemoveSelected = () => {
    selectedItems.forEach(key => {
      const [productId, size] = key.split('-').map(Number);
      removeFromCart(productId, size);
    });
  };


  const selectedTotal = cartWithDetails
    .filter(item => selectedItems.includes(`${item.productId}-${item.size}`))
    .reduce((total, item) => total + item.product!.price * item.quantity, 0);


  const selectedCount = cartWithDetails
    .filter(item => selectedItems.includes(`${item.productId}-${item.size}`))
    .reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-layout">

        <div className="cart-main">
          <div className="cart-header">
            <h1 className="cart-title">
              Корзина
              <span className="cart-count">({cartItems.length})</span>
            </h1>
            <div className="cart-actions">
              <label className="cart-select-all">
                <input 
                  type="checkbox" 
                  checked={areAllItemsSelected(cartWithDetails.length)}
                  onChange={handleSelectAll}
                />
                <span>Выбрать все</span>
              </label>
              <button 
                className="cart-clear-btn"
                onClick={handleRemoveSelected}
                disabled={selectedItems.length === 0}
              >
                Удалить выбранные
              </button>
            </div>
          </div>

          {cartWithDetails.length === 0 ? (
            <div className="cart-empty">
              <p>Корзина пуста</p>
              <p>Добавьте товары из каталога</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartWithDetails.map(item => (
                <div key={`${item.productId}-${item.size}`} className="cart-item">
                  <input 
                    type="checkbox" 
                    checked={selectedItems.includes(`${item.productId}-${item.size}`)}
                    onChange={() => handleToggleSelect(item.productId, item.size)}
                    className="cart-item-checkbox"
                  />
                  <img 
                    src={item.product!.images[0]} 
                    alt={item.product!.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <div className="cart-item-brand">{item.product!.brand}</div>
                    <div className="cart-item-name">Кроссовки {item.product!.brand} {item.product!.name}</div>
                    <div className="cart-item-size">Размер: {item.size}</div>
                    <div className="cart-item-color">Цвет: {item.product!.colors?.[0].name || 'не указан'}</div>
                  </div>
                  <div className="cart-item-price">
                    {(item.product!.price * item.quantity).toLocaleString()} ₽
                  </div>
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => {
                      removeFromCart(item.productId, item.size);
                    }}
                    className="cart-item-remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>


        <aside className="cart-sidebar">
          <div className="cart-summary">
            <div className="cart-summary-count">
              {selectedCount} {selectedCount === 1 ? 'товар' : selectedCount < 5 ? 'товара' : 'товаров'}
            </div>
            <div className="cart-summary-total">
              <span>Итого:</span>
              <span className="cart-summary-price">{selectedTotal.toLocaleString()} ₽</span>
            </div>
            
            <button 
              className="cart-checkout-btn"
              onClick={() => {

                const selectedCartItems = cartWithDetails
                  .filter(item => selectedItems.includes(`${item.productId}-${item.size}`))
                  .map(item => ({
                    productId: item.productId,
                    size: item.size,
                    quantity: item.quantity
                  }));
                
                navigate('/checkout', { state: { selectedItems: selectedCartItems } });
              }}
              disabled={selectedCount === 0}
            >
              Оформить заказ
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};