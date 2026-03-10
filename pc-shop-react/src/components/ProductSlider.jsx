import React, { useState } from "react";
import ProductCard from "./ProductCard";
function ProductSlider({ products, addCart }) {
const visible = 4;
const [index, setIndex] = useState(0);
function next(){
if(index + visible < products.length){
setIndex(index + 1);
}else{
setIndex(0);
}
}
function prev(){
if(index > 0){
setIndex(index - 1);
}else{
setIndex(products.length - visible);
}
}
const showProducts = products.slice(index, index + visible);
return (
<div className="slider">
<h2>Sản phẩm nổi bật</h2>
<div className="slider-container">
<button className="slider-btn left" onClick={prev}>
❮
</button>
<div className="slider-track">
{showProducts.map((p)=>(
<ProductCard
key={p.id}
product={p}
addCart={()=>addCart(p)}
/>
))}
</div>
<button className="slider-btn right" onClick={next}>
❯
</button>
</div>
</div>
);
}
export default ProductSlider;