import { client } from "./client"

export const fetchAllCatagories = async () => {
    const data = await client.fetch(`*[_type == "catagories"]`)
    return data
}