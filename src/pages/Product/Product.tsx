import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import type { Product } from "../../types/product";
import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import "./Product.css";

const purposeColors: Record<string, string> = {
  гоночные: "#e74c3c",
  "для кроссов": "#27ae60",
  "для темпов": "#f1c40f",
  универсальные: "#9b59b6",
};

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"about" | "brand">("about");
  const [zoomedGalleryImage, setZoomedGalleryImage] = useState<string | null>(null);

  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart, isInCart } = useCart();

  const product = products.find((p: Product) => p.id === Number(id));

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setCurrentImageIndex(() => 0);
  }, [selectedColor]);

  const currentImages = useMemo(() => {
    if (!product) return [];
    if (selectedColor && product.colors) {
      const colorObj = product.colors.find((c) => c.id === selectedColor);
      if (colorObj?.images?.length) {
        return colorObj.images;
      }
    }
    return product.images || [];
  }, [selectedColor, product]);

  const availableSizes = useMemo(() => {
    if (!product) return [];
    if (selectedColor && product.colors) {
      const colorObj = product.colors.find((c) => c.id === selectedColor);
      if (colorObj?.sizes) {
        return colorObj.sizes;
      }
    }
    return product.sizes || [];
  }, [selectedColor, product]);


  if (!product) {
    return <div className="product-not-found">Товар не найден</div>;
  }


  const isAddedToCart = selectedSize ? isInCart(product.id, selectedSize) : false;

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Пожалуйста, выберите размер");
      return;
    }
    addToCart(product.id, selectedSize);
  };


  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-left">
          <div className="product-gallery">
            <div className="product-gallery__main">
              <button
                className="product-gallery__arrow product-gallery__arrow--left"
                onClick={handlePreviousImage}
              >
                ‹
              </button>

              <div className="product-gallery__image-wrapper">
                <img
                  src={currentImages[currentImageIndex]}
                  alt={`${product.brand} ${product.name}`}
                  className="product-gallery__image"
                />
              </div>

              <button
                className="product-gallery__arrow product-gallery__arrow--right"
                onClick={handleNextImage}
              >
                ›
              </button>
            </div>

            <div className="product-gallery__thumbnails">
              {currentImages.map((img: string, index: number) => (
                <button
                  key={index}
                  className={`product-gallery__thumb ${index === currentImageIndex ? "active" : ""
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-tabs">
              <button
                className={`product-tab ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                О товаре
              </button>
              <button
                className={`product-tab ${activeTab === "brand" ? "active" : ""}`}
                onClick={() => setActiveTab("brand")}
              >
                О бренде
              </button>
            </div>

            {activeTab === "about" && product.description && (
              <div className="product-description">
                <p>{product.description}</p>
              </div>
            )}

            {activeTab === "brand" && product.brandDescription && (
              <div className="product-brand-info">
                <h3>{product.brand}</h3>
                <p>{product.brandDescription}</p>
              </div>
            )}
          </div>
        </div>

        <div className="product-right">
          <div className="product-sidebar">
            <div className="product-sidebar__brand">{product.brand}</div>

            <h1 className="product-sidebar__name">
              Кроссовки {product.brand} {product.name}
            </h1>

            <div className="product-sidebar__purpose">
              {product.purpose.map((p: string) => (
                <span
                  key={p}
                  className="product-sidebar__purpose-item"
                  style={{ color: purposeColors[p] || "#666" }}
                >
                  <span
                    className="product-sidebar__purpose-marker"
                    style={{ backgroundColor: purposeColors[p] || "#666" }}
                  />
                  {p}
                </span>
              ))}
            </div>

            {product.colors && product.colors.length > 0 && (
              <div className="product-sidebar__field">
                <select
                  className="product-sidebar__select"
                  value={selectedColor || ""}
                  onChange={(e) => setSelectedColor(e.target.value || null)}
                >
                  <option value="" disabled>
                    Выберите цвет
                  </option>
                  {product.colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="product-sidebar__field">
              <select
                className="product-sidebar__select"
                value={selectedSize || ""}
                onChange={(e) => setSelectedSize(Number(e.target.value) || null)}
              >
                <option value="" disabled>
                  Выберите размер
                </option>
                {availableSizes.map((size: number) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-sidebar__actions">
              <button
                className={`product-sidebar__add-to-cart ${isAddedToCart ? "added" : ""
                  }`}
                onClick={() => {
                  if (!isAddedToCart) {
                    handleAddToCart();
                  } else {
                    navigate("/cart");
                  }
                }}
              >
                {isAddedToCart ? "Посмотреть в корзине" : "Добавить в корзину"}
              </button>
              <button
                className={`product-sidebar__favorite ${isFavorite(product.id) ? "active" : ""
                  }`}
                onClick={() => toggleFavorite(product.id)}
                aria-label="Добавить в избранное"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={isFavorite(product.id) ? "#e74c3c" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-gallery-section">
        <h2 className="product-gallery-section__title">
          Шикарно смотрятся на ногах клиентов
        </h2>

        <div className="product-gallery-slider">
          <button className="product-gallery-slider__arrow product-gallery-slider__arrow--left">
            ‹
          </button>

          <div className="product-gallery-slider__track">
            {product.galleryImages?.map((img: string, index: number) => (
              <div
                key={index}
                className="product-gallery-slider__item"
                onClick={() => setZoomedGalleryImage(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="product-gallery-slider__image"
                />
              </div>
            ))}
          </div>

          <button className="product-gallery-slider__arrow product-gallery-slider__arrow--right">
            ›
          </button>
        </div>

        <div className="product-gallery-section__buttons">
          <button
            className="product-gallery-section__btn"
            onClick={() => navigate(`/catalog?purpose=${product.purpose[0]}`)}
          >
            <div
              className="product-gallery-section__btn-marker"
              style={{
                backgroundColor: purposeColors[product.purpose[0]] || "#666",
              }}
            />
            <div>
              <div className="product-gallery-section__btn-title">
                Все кроссовки{" "}
                <span
                  className="product-gallery-section__btn-purpose"
                  style={{ color: purposeColors[product.purpose[0]] || "#666" }}
                >
                  {product.purpose[0].toUpperCase()}
                </span>
              </div>
              <div className="product-gallery-section__btn-subtitle">
                Категория
              </div>
            </div>
          </button>

          <button
            className="product-gallery-section__btn"
            onClick={() => navigate(`/catalog?brand=${product.brand}`)}
          >
            <div className="product-gallery-section__btn-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <div className="product-gallery-section__btn-title">
                Все кроссовки {product.brand}
              </div>
              <div className="product-gallery-section__btn-subtitle">Бренд</div>
            </div>
          </button>

          <button
            className="product-gallery-section__btn"
            onClick={() => navigate('/catalog')}
          >
            <div className="product-gallery-section__btn-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <div className="product-gallery-section__btn-title">
                Все кроссовки
              </div>
              <div className="product-gallery-section__btn-subtitle">
                Каталог
              </div>
            </div>
          </button>
        </div>
      </div>

      {zoomedGalleryImage && (
        <div
          className="product-zoom-modal"
          onClick={() => setZoomedGalleryImage(null)}
        >
          <div className="product-zoom-modal__content">
            <button
              className="product-zoom-modal__close"
              onClick={() => setZoomedGalleryImage(null)}
            >
              ✕
            </button>
            <img
              src={zoomedGalleryImage}
              alt=""
              className="product-zoom-modal__image"
            />
          </div>
        </div>
      )}
    </div>
  );
};