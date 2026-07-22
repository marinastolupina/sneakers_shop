import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import type { Product } from '../../types/product';
import './Checkout.css';

interface CartItem {
  productId: number;
  size: number;
  quantity: number;
}

interface CartItemWithProduct extends CartItem {
  product: Product;
}

export const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, selectedItems: contextSelectedItems } = useCart();

  const [formData, setFormData] = useState({
    phone: '',
    city: 'Москва',
    street: '',
    house: '',
    apartment: '',
    paymentMethod: 'online',
    paymentType: 'sbp',
    comment: ''
  });

  const [errors, setErrors] = useState({
    phone: '',
    apartment: ''
  });

  const selectedItemsFromContext: CartItem[] = useMemo(() => {
    return contextSelectedItems.map(key => {
      const [productId, size] = key.split('-').map(Number);
      const cartItem = cartItems.find(item => item.productId === productId && item.size === size);
      return { 
        productId, 
        size, 
        quantity: cartItem?.quantity || 1 
      };
    });
  }, [contextSelectedItems, cartItems]);


  const cartWithDetails: CartItemWithProduct[] = useMemo(() => {
    return selectedItemsFromContext
      .map((item: CartItem): CartItemWithProduct | null => {
        const product = products.find(p => p.id === item.productId);
        return product ? { ...item, product } : null;
      })
      .filter((item): item is CartItemWithProduct => item !== null);
  }, [selectedItemsFromContext]);


  const total: number = cartWithDetails.reduce(
    (sum: number, item: CartItemWithProduct) => sum + (item.product?.price || 0) * item.quantity,
    0
  );


  const deliveryCost: number = 0;
  const finalTotal: number = total + deliveryCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'phone' || name === 'apartment') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validatePhone = (phone: string): boolean => {
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      setErrors(prev => ({ ...prev, phone: 'Введите корректный номер телефона' }));
      return false;
    }
    return true;
  };

  const validateApartment = (apartment: string): boolean => {
    if (!apartment.trim()) {
      setErrors(prev => ({ ...prev, apartment: 'Укажите номер квартиры' }));
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isPhoneValid = validatePhone(formData.phone);
    const isApartmentValid = validateApartment(formData.apartment);
    
    if (!isPhoneValid || !isApartmentValid) {
      return;
    }
    
    alert('Заказ оформлен! Мы свяжемся с вами в ближайшее время.');
    clearCart();
    navigate('/');
  };

  if (contextSelectedItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <h2>Нет товаров для оформления</h2>
          <p>Перейдите в корзину и отметьте товары, которые хотите купить</p>
          <button onClick={() => navigate('/cart')} className="checkout-btn">
            Перейти в корзину
          </button>
        </div>
      </div>
    );
  }

  if (cartWithDetails.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <h2>Корзина пуста</h2>
          <p>Добавьте товары из каталога</p>
          <button onClick={() => navigate('/catalog')} className="checkout-btn">
            Перейти в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Оформление заказа</h1>

      <div className="checkout-auth-banner">
        <svg className="checkout-auth-banner__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
        <span><a href="#" className="checkout-auth-banner__link">Авторизуйтесь</a>, чтобы увидеть персональные условия доставки и отслеживать заказы</span>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="checkout-layout">
          <div className="checkout-main">
            <section className="checkout-section">
              <h2 className="checkout-section__title">Укажите адрес доставки</h2>
              
              <div className="checkout-field">
                <label htmlFor="city">Город</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  readOnly
                  className="checkout-field--readonly"
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="street">Улица *</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  required
                  placeholder="Название улицы"
                />
              </div>

              <div className="checkout-field-row">
                <div className="checkout-field checkout-field--half">
                  <label htmlFor="house">Номер дома *</label>
                  <input
                    type="text"
                    id="house"
                    name="house"
                    value={formData.house}
                    onChange={handleInputChange}
                    required
                    placeholder="Номер дома"
                  />
                </div>

                <div className="checkout-field checkout-field--half">
                  <label htmlFor="apartment">Номер квартиры *</label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    onBlur={() => validateApartment(formData.apartment)}
                    placeholder="Номер квартиры"
                    className={errors.apartment ? 'checkout-field--error' : ''}
                  />
                  {errors.apartment && (
                    <span className="checkout-field__error">{errors.apartment}</span>
                  )}
                </div>
              </div>

              <div className="checkout-map">
                <div className="checkout-map__placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Карта</span>
                </div>
              </div>
            </section>


            <section className="checkout-section">
              <h2 className="checkout-section__title">Выберите способ оплаты</h2>
              
<div className="checkout-payment-buttons">
<button
  type="button"
  className={`checkout-payment-button ${formData.paymentMethod === 'online' ? 'checkout-payment-button--black' : 'checkout-payment-button--outlined'}`}
  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'online', paymentType: 'sbp' }))}
>
  Онлайн
</button>
  
  <button
    type="button"
    className={`checkout-payment-button ${formData.paymentMethod === 'upon' ? 'checkout-payment-button--black' : 'checkout-payment-button--outlined'}`}
    onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'upon', paymentType: 'card' }))}
  >
    При получении
  </button>
</div>

              <div className="checkout-payment-options">
                {formData.paymentMethod === 'online' ? (
                  <>
                    <label className="checkout-radio">
                      <input
                        type="radio"
                        name="paymentType"
                        value="sbp"
                        checked={formData.paymentType === 'sbp'}
                        onChange={handleInputChange}
                      />
                      <span className="checkout-radio__label">
                        <strong>СБП</strong>
                      </span>
                    </label>

                    <label className="checkout-radio">
                      <input
                        type="radio"
                        name="paymentType"
                        value="card"
                        checked={formData.paymentType === 'card'}
                        onChange={handleInputChange}
                      />
                      <span className="checkout-radio__label">
                        <strong>Карта</strong>
                      </span>
                    </label>
                  </>
                ) : (
                  <>
                    <label className="checkout-radio">
                      <input
                        type="radio"
                        name="paymentType"
                        value="card"
                        checked={formData.paymentType === 'card'}
                        onChange={handleInputChange}
                      />
                      <span className="checkout-radio__label">
                        <strong>Карта</strong>
                      </span>
                    </label>

                    <label className="checkout-radio">
                      <input
                        type="radio"
                        name="paymentType"
                        value="cash"
                        checked={formData.paymentType === 'cash'}
                        onChange={handleInputChange}
                      />
                      <span className="checkout-radio__label">
                        <strong>Наличные</strong>
                      </span>
                    </label>
                  </>
                )}
              </div>
            </section>


            <section className="checkout-section">
              <h2 className="checkout-section__title">Кто получит этот заказ?</h2>
              
              <div className="checkout-field">
                <label htmlFor="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={() => validatePhone(formData.phone)}
                  required
                  placeholder="+7 (999) 123-45-67"
                  className={errors.phone ? 'checkout-field--error' : ''}
                />
                {errors.phone && (
                  <span className="checkout-field__error">{errors.phone}</span>
                )}
              </div>
            </section>


            <section className="checkout-section">
              <h2 className="checkout-section__title">Комментарий к заказу</h2>
              
              <div className="checkout-field">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Пожелания к заказу"
                  rows={3}
                />
              </div>
            </section>


            <button type="submit" className="checkout-submit-btn">
              Подтвердить заказ
            </button>
          </div>


          <aside className="checkout-sidebar">
            <div className="checkout-summary">
              <h3 className="checkout-summary__title">Ваш заказ</h3>

              <div className="checkout-summary__items">
                {cartWithDetails.map(item => (
                  <div key={`${item.productId}-${item.size}`} className="checkout-summary__item">
                    <img 
                      src={item.product?.images[0]} 
                      alt={item.product?.name}
                      className="checkout-summary__image"
                    />
                    <div className="checkout-summary__info">
                      <div className="checkout-summary__name">
                        {item.product?.brand} {item.product?.name}
                      </div>
                      <div className="checkout-summary__details">
                        Размер: {item.size} • {item.quantity} шт.
                      </div>
                    </div>
                    <div className="checkout-summary__price">
                      {(item.product?.price * item.quantity).toLocaleString()} ₽
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-summary__total">
                <div className="checkout-summary__row">
                  <span>Товары:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <div className="checkout-summary__row">
                  <span>Доставка:</span>
                  <span>{deliveryCost} ₽</span>
                </div>
                <div className="checkout-summary__row checkout-summary__row--final">
                  <span>Итого:</span>
                  <span className="checkout-summary__final-price">{finalTotal.toLocaleString()} ₽</span>
                </div>
              </div>

              <button type="submit" className="checkout-submit-btn">
                Подтвердить заказ
              </button>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
};