import type { Product } from "../types"

//fetch 4 random products
export const getTopSellers = (async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4')
return await response.json()
})()