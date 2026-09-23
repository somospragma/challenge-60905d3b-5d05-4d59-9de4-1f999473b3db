import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@vtex/api';
import { useProductAnimation } from '../hooks/useProductAnimation';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { startAnimation, stopAnimation } = useProductAnimation();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    startAnimation(products, setDisplayedProducts);
    return () => stopAnimation();
  }, [products]);

  return (
    <div className="product-grid">
      {displayedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;