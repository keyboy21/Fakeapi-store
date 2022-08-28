import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../Types/Product";
import { getProducts } from "../API/getData";
import { getTotalitems } from '../hooks/Data';
import classes from './app.module.css';
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Item from "../Components/Item/Item";
import Cart from '../Components/Cart/Cart';

const App = () => {

  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as ProductType[])


  const { data, error, isLoading } = useQuery<ProductType[], Error>(
    ["products"],
    getProducts
  );

  return (
    <div className="App">
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        error.message
      ) : (
        <div className={classes.wrapper}>
          <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
            <Badge color="error" badgeContent={getTotalitems(cartItems)}>
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </Badge>
          </Drawer>
          <AddShoppingCart className={classes.cart} onClick={() => setCartOpen(true)} />
          <Grid container spacing={3}>
            {data?.map((product) => (
              <Grid item key={product.id} xs={12} sm={4}>
                <Item item={product} setCartItems={setCartItems} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default App;
