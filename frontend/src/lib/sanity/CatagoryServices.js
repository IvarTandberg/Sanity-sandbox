import { client } from "./client"

export const fetchAllCatagories = async () => {
    const data = await client.fetch(`*[_type == "catagories"]`)
    return data
}

export const fetchCategory = async (category) => {
    const data = await client.fetch(`*[_type == "catagories" && catagory_slug.current 
    == $category]`,{category})
    return data
}