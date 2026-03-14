import React from "react"
function Header({
cart,
setShowCart,
keyword,
setKeyword,
filteredProducts
}){
return(
<div className="header">
{/*logo trái*/}
<div className="left-header">
<div className="logo">
<img src="/images/logo.png" alt="logo"/>
</div>
<h2>PC Gaming</h2>
</div>
{/*search+cart*/}
<div className="search-cart">
<div className="search-box">
<input
value={keyword}
onChange={(e)=>setKeyword(e.target.value)}
placeholder="Tìm sản phẩm..."
/>
{/*popup sp*/}
{keyword && (
<div className="search-popup">
{filteredProducts.length===0 &&
<p className="no-result">Không tìm thấy</p>
}
{filteredProducts.slice(0,5).map(p=>(
<div key={p.id} className="search-item">
<img src={p.image} alt={p.name}/>
<div className="search-info">
<p className="search-name">{p.name}</p>
<p className="search-price">
{p.price.toLocaleString()}đ
</p>
</div>
</div>
))}
</div>
)}
</div>
<button
className="cart"
onClick={()=>setShowCart(true)}
>
Giỏ hàng ({cart})
</button>
</div>
</div>
)
}
export default Header