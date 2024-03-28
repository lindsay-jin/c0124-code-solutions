import { useState, useEffect } from 'react';
import { type Product } from '../lib/data.ts';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { readProduct } from '../lib/read.ts';

export function Details() {
  const { productId } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  function handleSave() {
    alert(`Saved ${product?.name}`);
    navigate('/');
  }

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Item {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="linkContainer">
        <div className="linkToCatalog">
          <Link to="/" className="btn btnToCatalog">
            &lt; Back to Dashboard
          </Link>
        </div>
      </div>
      <div className="firstRow">
        <div className="imageContainer">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="infoContainer">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.shortDescription}</p>
        </div>
      </div>
      <div className="secondRow">
        <p>{product.longDescription}</p>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
