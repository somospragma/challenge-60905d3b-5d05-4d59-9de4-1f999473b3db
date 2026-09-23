import React, { useState } from 'react';
import { CSSHandles, useCssHandles } from 'vtex.styleguide';
import { Product } from '@vtex/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cssHandles = useCssHandles(['productCard', 'hoverEffect']);

  return (
    <div
      className={`${cssHandles.productCard} ${isHovered? cssHandles.hoverEffect : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;