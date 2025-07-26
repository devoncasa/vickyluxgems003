
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const displaySpecs = () => {
    if (product.specifications.beadSize_mm && product.specifications.beadCount) {
        return `${product.specifications.beadSize_mm}mm, ${product.specifications.beadCount} beads`;
    }
    if (product.specifications.ringSize) {
        return `Size: ${product.specifications.ringSize}`;
    }
    if (product.specifications.pendantMetal) {
        return `${product.specifications.pendantMetal}`;
    }
    return `Weight: ${product.specifications.totalWeight_grams}g`;
  };

  const altText = `A luxurious ${product.name}, a piece of handmade spiritual jewelry with ${product.material} beads, perfect as a meaningful gift.`;

  return (
    <div className="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 dark-context bg-stone-900/50 backdrop-blur-md border border-white/10">
      <Link to={`/collection/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <div className="w-full h-full bg-stone-800/20 flex items-center justify-center">
              <img src={product.media.mainImageUrl} alt={altText} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
          </div>
          <div className="absolute top-0 right-0 bg-black/30 text-white/90 text-xs font-semibold px-3 py-1 m-3 rounded-full backdrop-blur-sm">{product.material}</div>
          {product.bestseller && (
            <div className="absolute top-0 left-0 bg-[var(--c-accent-secondary)] text-white text-xs font-bold px-3 py-1 m-3 rounded-full uppercase tracking-wider">Bestseller</div>
          )}
        </div>
      </Link>
      <div className="p-5 text-center flex-grow flex flex-col justify-between">
        <div>
          <Link to={`/collection/${product.id}`} className="block">
            <h3 className="text-xl font-semibold truncate group-hover:text-amber-300 transition-colors">{product.name}</h3>
          </Link>
          <p className="text-sm text-white/70 mt-1">{displaySpecs()}</p>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-semibold mb-3">฿{product.price.toLocaleString('en-US')}</p>
          <button 
            onClick={handleAddToCartClick} 
            disabled={added}
            className={`w-full px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ease-in-out border-2 ${
              added 
                ? 'bg-amber-400 text-stone-900 border-amber-400' 
                : 'bg-transparent border-white/50 text-white/80 hover:bg-white/10 hover:border-white'
            }`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;