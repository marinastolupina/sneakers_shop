import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__content">

          <div className="footer__column footer__column--left">
            <a href="tel:88000000000" className="footer__phone">
              8 (800) 000-00-00
            </a>
            

            <div className="footer__socials">
              <a 
                href="#" 
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.723 18.893h2.921c.421 0 .578-.19.683-.71.318-1.576 1.59-1.68 1.59-1.68s1.606-.094 2.305 1.026c.64 1.027.565 1.364.565 1.364h3.24s.698-.074.364-1.217c-.31-1.053-2.26-2.413-2.426-2.703-.166-.29.12-.583.12-.583s2.14-2.427 2.35-3.254c.19-.743-.34-.68-.34-.68l-3.938.002s-.29-.04-.503.083c-.205.12-.338.4-.338.4s-.602 1.574-1.41 2.623c-.74.964-1.04.855-1.04.855s-.253-.035-.253-.985v-2.406c.02-.35-.098-.504-.28-.54-.185-.035-.35-.035-.35-.035h-3.36s-.503-.015-.866.154c-.33.153-.29.443-.29.443v3.343s-.035.69-.42.84c-.35.135-.83-.44-1.86-2.62-1.33-2.81-2.33-5.93-2.33-5.93s-.066-.26-.185-.4c-.145-.17-.42-.22-.42-.22H4.33s-.365.01-.554.168c-.17.142-.013.44-.013.44s1.827 4.26 3.903 6.406c1.903 1.966 4.057 1.83 4.057 1.83z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Мессенджер Макс"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle cx="8" cy="12" r="1.5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                  <circle cx="16" cy="12" r="1.5"/>
                </svg>
              </a>
            </div>

            <div className="footer__subscribe">
              <h3 className="footer__subscribe-title">
                Скидка 10% за подписку<br />на новинки и акции
              </h3>
              <form className="footer__subscribe-form">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="footer__email-input"
                />
                <button type="submit" className="footer__subscribe-btn">
                  Подписаться
                </button>
              </form>
              <a href="#" className="footer__promo-link">
                Условия акции
              </a>
            </div>
          </div>

          <div className="footer__column footer__column--center">
            <nav className="footer__nav">
              <a href="#" className="footer__nav-link">Личный кабинет</a>
              <a href="#" className="footer__nav-link">Доставка и оплата</a>
              <a href="#" className="footer__nav-link">Помощь</a>
            </nav>
          </div>

  
          <div className="footer__column footer__column--right">
            <p className="footer__copyright">
              © 2000 - 2026 ИП П. Быстров.<br />
              ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
            <p className="footer__disclaimer">
              Веб-сайт не является основанием для предъявления претензий и рекламаций, 
              информация является ознакомительной, технические характеристики товаров 
              могут отличаться от указанных на сайте.
            </p>
          </div>
        </div>


        <div className="footer__bottom">
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Пользовательское соглашение</a>
            <a href="#" className="footer__bottom-link">Оферта</a>
            <a href="#" className="footer__bottom-link">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};