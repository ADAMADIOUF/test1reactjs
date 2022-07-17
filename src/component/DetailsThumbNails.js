import React from 'react'

export default function DetailsThumbNails({images,setIndex}) {
  return (
    <div>
      <div className='thumbnails'>
        {images.map((img, index) => {
          return <img src={img} alt='' key={index} onClick={()=> setIndex(index)} className='img-details' />;
        })}
      </div>
    </div>
  );
}
