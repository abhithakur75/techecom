import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/Cartslice';
import "../styles/cartPage.css";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className='cart-page'>
      <div className="cart-items">
      <h1>Shopping Cart</h1>
        {cart.map(product => (
          <div key={product.id} className='cart-img'>
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>Total item: {product.quantity} <br /> Price: ${product.price}</p>
              <button onClick={() => dispatch(removeFromCart(product))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Order Summary</h2> <br />
        <h2>Total: ${totalPrice}</h2> <br />
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>

    </div>
  );
};

export default CartPage;
