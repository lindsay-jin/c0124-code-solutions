import { Link } from 'react-router-dom';
import { type Product } from '../lib/data.ts';
import { useEffect, useState } from 'react';
import { readCatalog } from '../lib/read.ts';
import './Catalog.css';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div>
      <h1>Catalog</h1>
      <div className="container row">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

type productProps = {
  product: Product;
};
function ProductCard({ product }: productProps) {
  return (
    <div className="productCard">
      <div className="imageContainer">
        <Link to={`details/${product.productId}`}>
          {' '}
          <img src={product.imageUrl} alt="" />
        </Link>
      </div>
      <div className="infoContainer">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.shortDescription}</p>
      </div>
    </div>
  );
}
