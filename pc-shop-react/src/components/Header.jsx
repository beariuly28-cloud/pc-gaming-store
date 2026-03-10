import React from "react"
function Header({cart}){
return(
<div className="header">
<div className="left-header">
<div className="logo">
<img src="/images/logo.png"/>
</div>
<h2>PC Gaming</h2>
</div>
<div className="search-cart">
<input placeholder="Tìm sản phẩm..." />
<button className="cart">
Giỏ hàng ({cart})
</button>
</div>
</div>
)
}
export default Header
