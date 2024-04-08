import { Link } from 'react-router-dom';
import { type Product, readCatalog, toDollars } from '../lib';
import { useEffect, useState } from 'react';
import './Catalog.css';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  //when setError is called, the component re-renders, error state possibly holds an Error object(hence unknown)

  useEffect(()=>{
    async function loadProducts(){
      try{
        const products = await readCatalog();
        setProducts(products); //causing component to re-render with the fetched data
      } catch(error) { //if an error occurs/readCatalog rejects the promise, catch block catches error and passes it setError
        setError(error); // update state to display error message?
      }finally {
        setIsLoading(false) // regardless of the operation was successful or not, this update the loading state to false, indicate async operation is done, this can trigger a re-render to remove the loading indicator
      }
    }
    setIsLoading(true); // triggers a re-render of loading indicator
    loadProducts();
  }, [])
  //no cleanup necessary since effect only runs once when it mounts

  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return (
      <div>
        Cannot load catalog due to
        {error instanceof Error ? error.message : 'unknown error'}
        {/* conditionally check and display an error message based on the current
        state of error. */}
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
        <p className="price">{toDollars(price)}</p>
        <p className="shortText">{shortDescription}</p>
      </div>
    </Link>
  );
}
