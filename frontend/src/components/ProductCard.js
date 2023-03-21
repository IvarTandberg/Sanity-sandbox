import { Link } from "react-router-dom";

export default function ProductCard ({productinfo}) {
    return (
        <article>
            <h2>{productinfo.products_title}</h2>
            <p>Pris: {productinfo.products_price}</p>
            <Link to={productinfo?.slug?.current}>Les mer</Link>
        </article>
    )
}