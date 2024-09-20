import React, { useRef } from 'react';
import styles from './ProductGrid.module.css'; // Update import to use CSS Modules

// Import images directly
import img10 from '../../assets/img10.png';
import img11 from '../../assets/img11.jpeg';
import img12 from '../../assets/img12.png';
import img9 from '../../assets/img9.png';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Army Green Active Short Sleeve', price: 34.95, oldPrice: 34.95, image: img9 },
    { id: 2, name: 'Army Green Active Short Sleeve', price: 34.95, oldPrice: 34.95, image: img10 },
    { id: 3, name: 'Army Green Active Short Sleeve', price: 34.95, oldPrice: 34.95, image: img11 },
    { id: 4, name: 'Army Green Active Short Sleeve', price: 34.95, oldPrice: 34.95, image: img12 },
  ];

  const scrollRef = useRef(null);

  const handleMouseEnter = () => {
    scrollRef.current.classList.add(styles.paused);
  };

  const handleMouseLeave = () => {
    scrollRef.current.classList.remove(styles.paused);
  };

  return (
    <div className={styles.productGridContainer}>
      <h2 className={styles.productGridTitle}>Future Looks Bright!</h2>

      <div className={styles.productGrid} ref={scrollRef}>
        {[...products, ...products].map((product, index) => (
          <div
            className={styles.productCard}
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productPrice}>
              ${product.price}
              <span className={styles.productOldPrice}>${product.oldPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
