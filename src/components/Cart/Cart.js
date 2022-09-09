import React from 'react';
import './Cart.css';
const Cart = (props) =>{
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total,prd)=> total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if (total > 15) {
        shipping =14;
    }else if(total > 0){
        shipping = 12;
    }
    console.log(total);
    return(
        <div>
           <div className='summary'>
            <h1>Order Summary</h1>
            <h2>Items Orderd {cart.length}</h2>
           </div>
           <p>items: <span>$</span></p>
           <p>Shipping & Handaling <span>${shipping}</span></p>
           <p>Product Price : $ <span>{total}</span></p>
           <p>Total before Tax : <span>$</span></p>
           <p>Estimated Tax : <span>$</span></p>
           <h3><span>Order Total : ${total + shipping}</span></h3>
        </div>
    )
}
export default Cart;