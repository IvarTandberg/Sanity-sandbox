import { useEffect, useState } from "react"
import { fetchAllCatagories } from "../../lib/sanity/CatagoryServices"
import { Link } from "react-router-dom"

export default function CatagoriesPage() {
    //lager en state for å lagre kategoriene 
    const [cats, setCats] = useState(null)
    

    async function getCatagories() {
        const data = await fetchAllCatagories()
        setCats(data)
    }

    //kjøre getCatagories når komponenten lastes

    useEffect(() => {
        getCatagories()
    }, [])

    console.log(cats)

    return (
    <>
    <h1>Alle katagorier</h1>
    <ul>
        {cats?.map((c, i) => <li key={i}><Link to={c.catagory_slug.current}>{c.category_title}</Link></li>)}
    </ul>
    </>
    )

}