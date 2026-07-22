import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import './Home.css';


const purposeColors: Record<string, string> = {
  гоночные: '#e74c3c',
  'для кроссов': '#27ae60',
  'для темпов': '#f1c40f',
  универсальные: '#9b59b6',
};

export const Home = () => {
  const navigate = useNavigate();

  const getBestSellerForPurpose = (purpose: string) => {
    return products.find(p => {
      if (Array.isArray(p.purpose)) {
        return p.purpose.includes(purpose);
      }
      return p.purpose === purpose;
    });
  };

  const purposes = [
    { name: 'универсальные', color: purposeColors['универсальные'] },
    { name: 'для кроссов', color: purposeColors['для кроссов'] },
    { name: 'для темпов', color: purposeColors['для темпов'] },
    { name: 'гоночные', color: purposeColors['гоночные'] },
  ];

  return (
    <div className="home-page">
        <section className="home-quote">
        <div className="home-quote__icon-wrapper">
          <div className="home-quote__speed-lines">
            <span style={{ backgroundColor: '#e74c3c' }} />
            <span style={{ backgroundColor: '#27ae60' }} />
            <span style={{ backgroundColor: '#f1c40f' }} />
            <span style={{ backgroundColor: '#9b59b6' }} />
            <span style={{ backgroundColor: '#006eff' }} />
          </div>

          <svg
            className="home-quote__runner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M0 0h640v640H0z" fill="none" />
            <path
              fill="currentColor"
              d="M352.5 32c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56M219.6 240c-3.3 0-6.2 2-7.4 5l-22 54.9c-6.6 16.4-25.2 24.4-41.6 17.8s-24.4-25.2-17.8-41.6l21.9-54.9c11-27.3 37.4-45.2 66.9-45.2h97.3c28.5 0 54.8 15.1 69.1 39.7l32.8 56.3h61.6c17.7 0 32 14.3 32 32s-14.3 32-32 32h-61.6c-22.8 0-43.8-12.1-55.3-31.8l-10-17.1l-20.7 70.4l75.4 22.6c27.7 8.3 41.8 39 30.1 65.5L381.7 573c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l49.2-110.8l-95.9-28.8c-32.7-9.8-52-43.7-43.7-76.8l22.7-90.6h-35.9zm-8 181c13.3 14.9 30.7 26.3 51.2 32.4l4.7 1.4l-6.9 19.3c-5.8 16.3-16 30.8-29.3 41.8l-82.4 67.9c-13.6 11.2-33.8 9.3-45-4.3s-9.3-33.8 4.3-45l82.4-67.9c4.5-3.7 7.8-8.5 9.8-13.9z"
            />
          </svg>
        </div>

        <div className="home-quote__content">
          <p className="home-quote__text">
            «Бег может приносить удовольствие каждому, дело за выбором правильной пары кроссовок»
          </p>
          <span className="home-quote__name">Петр Быстров</span>
          <span className="home-quote__role">
            основатель магазина, бегун и главный испытатель<br />
            всех представленных в магазине кроссовок
          </span>
        </div>
      </section>

      <section className="home-purposes">
        {purposes.map((purpose, index) => {
          const bestSeller = getBestSellerForPurpose(purpose.name);
          const isReversed = index % 2 === 1;

          return (
            <div
              key={purpose.name}
              className={`home-purpose-row ${isReversed ? 'home-purpose-row--reversed' : ''}`}
            >

              <div
                className="home-purpose-block"
                onClick={() => navigate(`/catalog?purpose=${purpose.name}`)}
              >
                <div
                  className="home-purpose-block__content"
                  style={{ borderColor: purpose.color }}
                >
                  <span className="home-purpose-block__label">Кроссовки</span>
                  <h2 className="home-purpose-block__title">
                    <span style={{ color: purpose.color }}>
                      {purpose.name.charAt(0).toUpperCase() + purpose.name.slice(1)}
                    </span>
                    <span className="home-purpose-block__stripes">
                      <span style={{ backgroundColor: purpose.color }} />
                      <span style={{ backgroundColor: purpose.color }} />
                      <span style={{ backgroundColor: purpose.color }} />
                      <span style={{ backgroundColor: purpose.color }} />
                      <span style={{ backgroundColor: purpose.color }} />
                    </span>
                  </h2>
                </div>
              </div>


              <div
                className="home-best-seller-block"
                style={{ borderColor: purpose.color }}
                onClick={() => bestSeller && navigate(`/product/${bestSeller.id}`)}
              >
                {bestSeller ? (
                  <>
                    <img
                      src={bestSeller.images[0]}
                      alt={bestSeller.name}
                      className="home-best-seller-block__image"
                    />
                    <p
                      className="home-best-seller-block__label"
                      style={{ color: purpose.color }}
                    >
                      Самая продаваемая пара
                    </p>
                  </>
                ) : (
                  <div className="home-best-seller-block__placeholder">
                    <p>Нет товаров</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}


        <div className="home-all-models-block">
          <div
            className="home-all-models-block__content"
            onClick={() => navigate('/catalog')}
          >
            <span className="home-all-models-block__label">Каталог</span>
            <h2 className="home-all-models-block__title">
              Все модели кроссовок
              <span className="home-all-models-block__stripes">
                <span style={{ backgroundColor: '#e74c3c' }} />
                <span style={{ backgroundColor: '#27ae60' }} />
                <span style={{ backgroundColor: '#f1c40f' }} />
                <span style={{ backgroundColor: '#9b59b6' }} />
                <span style={{ backgroundColor: '#1a1a1a' }} />
              </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};