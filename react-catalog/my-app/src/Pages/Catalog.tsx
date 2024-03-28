import { Link } from 'react-router-dom';
import {type Product, Products} from '../lib/data.ts'

export function Catalog(){
  return (
    <div>
      <h1>Catalog</h1>
      <div className="container row">
        {/* <div className="column-third">
          <div className="cardContainer">
            <div className="imageContainer">
              <img src="/images/shake-weight" alt="" />
            </div>
            <div className='infoContainer'>
              <p>Shake Weight</p>
              <span>$29.99</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fugit.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

function ItemCard(){
  return (
    <Link></Link>
  )
}
