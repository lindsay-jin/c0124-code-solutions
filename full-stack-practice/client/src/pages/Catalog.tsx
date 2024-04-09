import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Catalog.css';
import { toDollars } from '../lib/to-dollars';

export type Product = {
  productId: string;
  name: string;
  price: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};
export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok)
          throw new Error(`Fetch error with status: ${response.status}`);
        const result = await response.json();
        setProducts(result);
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
        Cannot load catalog due to
        {error instanceof Error ? error.message : 'unknown error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Catalog</h1>
      <div className="cards">
        {products?.map((product) => (
          <ItemCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  product: Product;
};

function ItemCard({ product }: Props) {
  const { imageUrl, productId, name, price, shortDescription } = product;
  return (
    <Link to={`/details/${productId}`} className="productCard">
      <div className="imageContainer">
        <img className="image" src={imageUrl} alt={name} />
      </div>
      <div className="infoContainer">
        <p className="name">{name}</p>
        <p className="price">{toDollars(+price)}</p>
        <p className="shortText">{shortDescription}</p>
      </div>
    </Link>
  );
}
