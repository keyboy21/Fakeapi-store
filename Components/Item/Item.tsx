import React, { FC, Dispatch, SetStateAction } from 'react';
import classes from './item.module.css';
import { Button } from '@mui/material';
import { ProductType } from '../../Types/Product';
import { handleAddtoCart } from '../../hooks/Data';

type Props = {
  item: ProductType,
  setCartItems:  React.Dispatch<React.SetStateAction<ProductType[]>>
}

const Item: FC<Props> = ({ item, setCartItems }) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.img} src={item.image} alt={item.title} />
      <div className={classes.cardBody}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button className={classes.button} onClick={() => handleAddtoCart(item, setCartItems)}>Add to Cart</Button>
    </div>
  )
}

export default Item