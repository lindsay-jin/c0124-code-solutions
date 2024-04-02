import { useParams } from 'react-router-dom';
import { Product, readProduct } from '../lib';
import { useEffect, useState } from 'react';


export function Details(){
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true); //setting it to true reflects the initial state of fetching data
  // setting the initial state to be false is useful when the data fetching is conditional, such as based on user input
  const [error, setError] = useState<unknown>(false);

  useEffect(()=>{
    async function loadProduct(productId: number){
      try{
        const product = await readProduct(productId);
        setProduct(product);
      }catch(error) {
        setError(error)
      }finally{
        setIsLoading(false);
      }
    }
    if(productId){
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId])



  const { imageUrl, name, price, shortDescription, longDescription } = product;
  return (
    <div>
      <div className="link"></div>
      <div className="middle">
        <div className="detailsImageContainer">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="detailsInfoContainer">
          <p>{name}</p>
          <p>{price}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className="bottom">
        <p>{longDescription}</p>
      </div>
    </div>
  );
}
