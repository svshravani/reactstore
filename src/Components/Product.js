import React from 'react';

const Product = ({product, addInCart}) => {
    
  return (
    <div className='col-11 col-sm-4 mb-4' >
        <div className="card p-0 overflow-hidden h-100 shadow" style={{width: "18rem"}}>
            <img src={product.image} className="card-img-top img-fluid" style={{height: "15rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="card-text">Price : ${product.price}</h6>
                    <button className="btn btn-success" onClick={() =>addInCart(product)}>Add to Cart</button>
                </div>
        </div>
    </div>
  )
}

export default Product;