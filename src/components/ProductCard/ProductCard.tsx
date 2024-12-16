import React from 'react';
import { ProductSpecs } from '../ProductSpecs';
import './ProductCard.scss';
import classNames from 'classnames';

type Props = {
  oldPrice?: number;
  wideButton?: boolean;
};

export const ProductCard: React.FC<Props> = ({ oldPrice, wideButton }) => {
  return (
    <div className="product-card">
      <img
        src="/img/phones/apple-iphone-14/midnight/00.webp"
        alt="Iphone 14 photo"
        className="product-card__image"
      />

      <div className="product-card__container">
        <p className="product-card__title body-text">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>

        <div className="product-card__prices">
          <h3 className="product-card__price">$999</h3>
          {oldPrice && (
            <h3 className="product-card__price--discount">${oldPrice}</h3>
          )}
        </div>

        <div className="product-card__line"></div>

        <ProductSpecs
          specs={{
            Screen: '6.1” OLED',
            Capacity: '128 GB',
            RAM: '6 GB',
          }}
        />

        <div
          className={classNames('product-card__buttons', {
            'product-card__buttons--wide': wideButton,
          })}
        >
          <button className={classNames({ 'button--wide': wideButton })}>
            Add to cart
          </button>
          <button className="button--white">
            <img src="/icons/favourite.svg" alt="Favourite icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
