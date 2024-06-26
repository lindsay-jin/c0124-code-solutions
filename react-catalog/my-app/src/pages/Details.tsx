import { Link, useNavigate, useParams } from 'react-router-dom';
import { Product, readProduct, toDollars } from '../lib';
import { useEffect, useState } from 'react';
import './Details.css';

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true); //setting it to true reflects the initial state of fetching data
  // setting the initial state to be false is useful when the data fetching is conditional, such as based on user input
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
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
        &lt; Back to Catalog
      </Link>
      <div className="middle">
        <div className="detailsImageContainer">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="detailsInfoContainer">
          <p style={{ fontSize: '2rem' }}>{name}</p>
          <p>{toDollars(price)}</p>
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
