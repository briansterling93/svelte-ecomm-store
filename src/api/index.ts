import axios from "axios";
import { topSellingProducts } from "../store";

export const getTopSellers = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=4"
    );

    topSellingProducts.set(response.data);
  } catch (error) {
    console.log(error);
  }
};
