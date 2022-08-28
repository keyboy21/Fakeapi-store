import React, { FC } from 'react'
import classes from './cart.module.css';
import { ProductType } from '../../Types/Product'
import CartItem from '../Cartitem/CartItem';

type Props = {
  cartItems: ProductType[],
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const Cart: FC<Props> = ({ cartItems, setCartItems }) => {
  const calculateTotal = (items: ProductType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <div className={classes.aside}>

      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? 'No items available' : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} setCartItems={setCartItems} />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  )
}

export default Cart