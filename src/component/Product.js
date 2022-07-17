import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from './DataProvide';

export default function Product() {
  const[products,setProducts]= useContext(DataContext)
  console.log(products);
  return (
    <div>
      <section className='section-center'>
        <div className='container-products'>
          {products.map((product) => {
            const { _id, images, title, description,price } = product;
            return (
              <div className='product-details' key={_id}>
                <Link to={`/products/${_id}`}>
                  <div className='products-img'>
                    <img src={images[0]} alt='hey' className='product-img' />
                  </div>
                </Link>
                <div className='product-info'>
                  <h3 className='name'>
                    <Link to={`/products/${_id}`}>{title}</Link>
                  </h3>
                  <p className='desc'>{description}</p>
                  <h3 className='price'>{price}</h3>
                </div>
                <div className='added-to-cart'>
                  <h3>ajouter au panier</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
