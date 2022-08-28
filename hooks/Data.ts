import { ProductType } from './../Types/Product';

export const getTotalitems = (clickedItem: ProductType[]) => clickedItem.reduce((ack: number, item) => ack + item.amount, 0);;

export const handleAddtoCart = (clickedItem: ProductType, setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>): void => {

  setCartItems(prev => {
    const isItemInCart = prev.find(item => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map(item =>
        item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }

    return [...prev, { ...clickedItem, amount: 1 }];
  })

}

export const handleRemovefromCart = (clickedItem: number, setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>): void => {
  setCartItems(prev =>
    prev.reduce((ack, item) => {
      if (item.id === clickedItem) {
        if (item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount - 1 }];
      } else {
        return [...ack, item];
      }
    }, [] as ProductType[])
  );
}
