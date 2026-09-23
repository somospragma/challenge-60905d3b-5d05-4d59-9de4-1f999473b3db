import { useEffect, useState } from 'react';
import { Product } from '@vtex/api';

interface AnimationProps {
  products: Product[];
  setDisplayedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const useProductAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = (products: Product[], setDisplayedProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDisplayedProducts(products);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  return { startAnimation, stopAnimation };
};

export default useProductAnimation;