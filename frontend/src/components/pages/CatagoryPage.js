import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchCategory } from "../../lib/sanity/CatagoryServices"


export default function CatagoryPage() {
    const {category} = useParams()

    const {catProds, setCatProds} = useState(null)

    async function getCategory(category) {
        const data = await fetchCategory(category)
        setCatProds(data[0])
    }

    useEffect (() => {
        getCategory(category)
    }, [category])

    console.log (catProds)

    return (
        <>
            <h1>{catProds?.category_title}</h1>
            {catProds?.products.map((p, i) => <p key={i}><Link to={`/${p.slug}`}>{p.product_title} NOK: {p.price},-</Link></p>)}
        </>
    )
}