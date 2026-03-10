import React from "react"
import ProductCard from "./ProductCard"
function ProductList({products, addCart}){
return(
<div className="products">
{products.map((p)=>(
<ProductCard
key={p.id}
product={p}
addCart={addCart}
/>
))}
</div>
)
}
export default ProductList