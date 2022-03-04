import React from 'react';
import Product from './Product';
import details from './Addons';
import Addons from './Addons';

function Main({products, addInCart, detail}) {
  return (
    <div>
        <h1 className='text-center mt-3'> The Paratha Store</h1>
        <section className='py-4 container'>
            <div className='row justify-content-container'>
                {products.map((product) => (
                    <Product key={product.id} product={product} addInCart={addInCart}></Product>
                    
                    ))}
            </div>
            {/* <h1 className='text-center mt-3'> Some Addons</h1>
            
            <div className='row justify-content-container'>                                // for Addons
                {details.map((detail) => (
                    <Addons key={detail.id} details={detail} addInCart={addInCart}></Addons>
                    
                    ))}
            </div> */}
        </section>
    </div>
  )
}

export default Main;