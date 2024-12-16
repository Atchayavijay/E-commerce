import React, { useContext } from 'react';
import { FaYoutube } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { products_categories } from '../data/products';
import { ProductContext } from '../context/ProductContect';

export default function Navbar() {

  const { invoice } = useContext(ProductContext)

  const isActive = (element) => {
    return element?.isActive ? 'text-blue-600' : ''
  }

  return (
    <div className='flex justify-between items-center bg-white shadow-lg px-8 border w-full h-20'>

    

      <ul className='flex items-center gap-10'>
        {
          products_categories.map(category => {
            return (
              <li key={category.value}><NavLink className={isActive} to={`/${category.value}`}>{category.label}</NavLink></li>
            )
          })
        }

      </ul>

      <Link className='relative' to={'/cart'}>
        <FaShoppingCart className='text-2xl' />
        {
          invoice?.count > 0 &&
          <div className='-top-2 -right-2 absolute flex justify-center items-center bg-blue-700 rounded-full w-4 h-4 text-white text-xs'>
            {invoice?.count}
          </div>
        }
      </Link>

    </div>
  )
}
