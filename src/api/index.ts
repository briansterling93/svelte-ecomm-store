import axios from "axios";
import { topSellingProducts } from "../store";

export const getTopSellers = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=16"
    );

    topSellingProducts.set(response.data);
  } catch (error) {
    console.log(error);
  }
};
