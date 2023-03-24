import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProduct } from "../../lib/sanity/productServices"

export default function ProductPage() {

    //Bruker useParams for å hente parameter fra URL
    const {slug} = useParams()
    // Gjøre klar en state for å lagre returnert data fro Saniti
    const [product, setProduct] = useState(null)

    // Lese opp promise, og få ut data fra Sanity
    const getProduct = async (slug) => {
        const data = await fetchProduct(slug)
        setProduct(data[0])

    }
    // Kjøre getProduct når komponentet lastes
    useEffect(() => {
        getProduct(slug)
    },[slug])

    //
    console.log(product)

    return (
        <>
        <h1>{product?.products_title}</h1>
        <img style={{maxWidth: "400px"}} alt={`Productbilde av ${product?.products_title}`} src={product?.imageURL}></img>
        <p>Kategori: {product?.catname}</p>
        <p>Pris: {product?.products_price}</p>
        </>
    )
}
