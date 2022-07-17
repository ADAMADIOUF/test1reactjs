import React,{useState,useContext,useRef} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvide'
import DetailsThumbNails from './DetailsThumbNails'
export default function Details() {
 const[index,setIndex]= useState(0)
 const {id} = useParams()
 
 const [products,setProducts]= useContext(DataContext)
  const imgContainer = useRef();
 const details = products.filter((product,index) => product._id ===id
 )
 const handleMouse = e => {
  const {left,top,width,height} = e.target.getBoundingClientRect()
  const x = (e.pageX - left) / width * 100
  const y = (e.pageY - top) / height * 100;
  imgContainer.current.style.backgroundPosition = `${x}% ${y}%`

 }
  return (
    <div>
     {
      details.map((product) =>{
      const { _id, images, title, description, price } = product;
      return (
        <div className='details' key={_id}>
          <div
            className='img-container'
            onMouseMove={handleMouse}
            style={{ backgroundImage: `url(${images[index]})` }}
            ref={imgContainer}
            onMouseLeave ={() => imgContainer.current.style.backgroundPosition = `center`}
          ></div>
          <div className='product-info'>
            <h3 className='name'>{title}</h3>
            <p className='desc'>{description}</p>
            <h3 className='price'>{price}</h3>
          </div>

          <DetailsThumbNails images={images} setIndex={setIndex} />
          <div className='added-to-cart-details'>
            <button className='btn-details'>ajouter au panier</button>
          </div>
        </div>
      );

      })
     }
    </div>
  )
}
