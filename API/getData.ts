import axios from 'axios'
import { ProductType } from '../Types/Product'

export const getProducts = async (): Promise<ProductType[]> => await (await axios.get<ProductType[]>('https://fakestoreapi.com/products')).data