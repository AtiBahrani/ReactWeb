import React from 'react';
import '../../App.css';
import Cards from '../Cards.js'
import { getUser, removeUserSession } from '../Util';



function Products(props){

  const handleLogout=()=>{
    removeUserSession();

    props.history.push('/sign-up');
  }

  return (
  <>
  <h1 className='products'>PRODUCTS</h1>
 
      <input type="button" onClick={handleLogout} value="Logout" />
  <Cards />
  </>
  );
}
export default Products;
