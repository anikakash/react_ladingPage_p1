import React from 'react';
import styles from './OfferComponent.module.css';

// Importing images at the top level of the file
import img1 from '../../assets/caps/img.jpeg';
import img2 from '../../assets/caps/img10.jpeg';
import img3 from '../../assets/caps/img6.jpeg';
import img4 from '../../assets/caps/img7.jpeg';

const OfferComponent = () => {
  const products = [
    {
      id: 1,
      name: 'Army Green Active Short Sleeve',
      price: 34.95,
      originalPrice: 34.95,
      image: img1,
    },
    {
      id: 2,
      name: 'Army Green Beanie',
      price: 34.95,
      originalPrice: 34.95,
      image: img2,
    },
    {
      id: 3,
      name: 'White Beanie',
      price: 34.95,
      originalPrice: 34.95,
      image: img3,
    },
    {
      id: 4,
      name: 'White Active Short Sleeve',
      price: 34.95,
      originalPrice: 34.95,
      image: img4,
    },
  ];

  return (
    <section className={styles.offerSection}>
      <div className={styles.cover}>
        <div className={styles.offerHeader}>
          <h1>
            BUY 1 GET 1 FREE <br /> <span>ON BEST SELLING PRODUCTS</span>
          </h1>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className={styles.priceSection}>
                <span className={styles.price}>${product.price}</span>
                <span className={styles.originalPrice}>${product.originalPrice}</span>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferComponent;
