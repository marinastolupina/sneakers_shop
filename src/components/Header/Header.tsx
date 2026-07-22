import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import { useCart } from '../../context/CartContext';
import { Search } from '../Search/Search';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const { getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(value)}`);
    }
  };

  return (
    <header className="header">

      <div className={`header__top ${isScrolled ? 'header__top--hidden' : ''}`}>
        <div className="header__top-content">
          <div className="header__city">
            <span>Москва</span>
          </div>
          <div className="header__top-links">
            <a href="#" className="header__top-link">Доставка и оплата</a>
            <a href="#" className="header__top-link">Помощь</a>
          </div>
        </div>
      </div>


      <div className="header__bottom">
        <div className="header__bottom-content">
   
          <div className="header__logo" onClick={() => navigate('/')}>
            <div className="header__logo-wrapper">
              <h1 className="header__logo-text">Беганутые</h1>
              <div className="header__logo-stripes">
                <span className="stripe stripe--1"></span>
                <span className="stripe stripe--2"></span>
                <span className="stripe stripe--3"></span>
                <span className="stripe stripe--4"></span>
                <span className="stripe stripe--5"></span>
              </div>
            </div>
            <p className="header__logo-subtitle">интернет-магазин беговой обуви</p>
          </div>


          <div className="header__search">
            <Search value={searchQuery} onChange={handleSearch} />
          </div>


          <div className="header__icons">
            <button className="header__icon-btn" onClick={() => navigate('/profile')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>

            <button className="header__icon-btn" onClick={() => navigate('/favorite')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {favorites.length > 0 && (
                <span className="header__badge">{favorites.length}</span>
              )}
            </button>

            <button className="header__icon-btn" onClick={() => navigate('/cart')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {getCartCount() > 0 && (
                <span className="header__badge">{getCartCount()}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};