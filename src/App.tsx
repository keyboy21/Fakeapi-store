// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../Types/Product";
import { getProducts } from "../API/getData";
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const App = () => {

  const { data, error, isLoading } = useQuery<ProductType[], Error>(
    ["products"],
    getProducts
  );

  return (
    <div className="App">
      {isLoading ? <LinearProgress />
        : error ? error.message
          : data.map((product) => (
            <h4 key={product.id}>
              {product.title}: {product.price}
            </h4>
          ))}
    </div>
  );
};

export default App;
