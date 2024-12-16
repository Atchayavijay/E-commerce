import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContect'

export default function Products() {
  const {products, addCart,removeCart} = useContext(ProductContext)
  return (
    <div className='flex flex-wrap gap-6 text-center'>
      {
        products && products.map(product=>{
          return(
            <div key={product.id} className='hover:shadow-lg m-2 rounded-md w-[200px]'>
              <img src={product.image} alt={product.namer} className='block m-auto p-4 w-[200px] h-[150px] object-contain' />
              {/* Product Info */}
              <div className='flex flex-col gap-2 my-4 p-2 h-[120px]'>
                <p className='font-bold text-center'>{product.name}</p>
                <p className='text-center text-sm'>${product.price}</p>
                <p className='text-gray-500 text-xs'>{product.smallDescription}</p>
              </div>
              <button className='bg-blue-600 p-2 w-full text-center text-white text-xs' onClick={()=>addCart(product)}>+ Add To Cart</button>
               <br />
              <button className='bg-gray-600 p-2 w-full text-center text-white text-xs' onClick={() => removeCart(product)}>-Remove from cart</button>
            </div>
          )
        })
      }
    </div>
  )
}
