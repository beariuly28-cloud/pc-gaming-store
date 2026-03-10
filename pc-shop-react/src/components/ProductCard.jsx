import React from "react"
function ProductCard({product, addCart}){
return(
<div className="product">
{product.tag && <span className={`tag ${product.tag}`}>{product.tag}</span>}
<img src={product.image} />
<h3>{product.name}</h3>
<p className="price">
{product.price.toLocaleString()}đ
</p>
<button
className="add-cart"
onClick={addCart}
>
Thêm vào giỏ
</button>
<div className="product-info">
<h4>{product.name}</h4>
<ul>
<li>CPU: {product.cpu}</li>
<li>GPU: {product.gpu}</li>
<li>RAM: {product.ram}</li>
<li>SSD: {product.ssd}</li>
</ul>
</div>
</div>
)
}
export default ProductCard