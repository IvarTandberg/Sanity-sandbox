import { ErrorResponse } from "@remix-run/router";
import { client } from "./client";

export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]`)
    return data
}

export const fetchProduct = async (slug) => {
    const data = await client.fetch(`
    *[_type == "products" && slug.current == $slug]
    {products_title, products_price, products_quantity, "imageURL":products_image.asset ->url, 
    "catname": category->category_title}
    `, {slug})
    return data
}