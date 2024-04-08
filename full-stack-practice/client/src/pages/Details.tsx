import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { type Product } from './Catalog';
import './Details.css';
import { toDollars } from '../lib/to-dollars';

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok)
          throw new Error(`Fetch error with status: ${response.status}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (id) {
      setIsLoading(true);
      loadProduct(+id);
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Cannot load product due to
        {error instanceof Error ? error.message : 'unknown error'}
      </div>
    );
  }

  function handleAdd() {
    alert(`Added ${product?.name} to cart`);
    navigate('/');
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { imageUrl, name, price, shortDescription, longDescription } = product;

  return (
    <div className="detailsContainer">
      <Link to="/" className="link">
        Back to Catalog
      </Link>
      <div className="middle">
        <div className="detailsImageContainer">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="detailsInfoContainer">
          <p style={{ fontSize: '2rem' }}>{name}</p>
          <p>{toDollars(+price)}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className="bottom">
        <p>{longDescription}</p>
      </div>
      <div>
        <button onClick={handleAdd}>Add to cart</button>
      </div>
    </div>
  );
}
