import React, { FC } from 'react'
import { ProductType } from '../../Types/Product'
import { Button } from '@mui/material'
import classes from './cartItem.module.css'
import { handleRemovefromCart, handleAddtoCart } from '../../hooks/Data';

type Props = {
  item: ProductType,
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const CartItem: FC<Props> = ({ item, setCartItems }) => {
  return (
    <div className={classes.item}>
      <div className={classes.body}>
        <h3>{item.title}</h3>
        <div className='information'>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className={classes.buttons}>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => handleRemovefromCart(item.id, setCartItems)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => handleAddtoCart(item, setCartItems)}
          >
            +
          </Button>
        </div>
      </div>
      <img className={classes.img} src={item.image} alt={item.title} />
    </div>
  )
}

export default CartItem