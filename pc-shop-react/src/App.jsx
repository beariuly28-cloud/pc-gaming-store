import React,{useState} from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import ProductSlider from "./components/ProductSlider"
import Footer from "./components/Footer";
import products from "./data/products"
import "./style.css"

function App(){
const [cart,setCart] = useState(0)
function addCart(){
setCart(cart+1)
}
return(
<div>
<Header cart={cart}/>
<div className="container">
<div className="sidebar">
<h3>Danh mục sản phẩm</h3>
<ul>
<li>PC Gaming</li>
<li>PC Đồ họa</li>
<li>PC Streaming</li>
<li>PC Văn phòng</li>
</ul>
</div>
<div className="content">
{/*banner*/}
<div className="banner">
<img src="/images/banner.jpg"/>
</div>
{/*slider sản phẩm nổi bật*/}
<ProductSlider
products={products}
addCart={addCart}
/>
{/*danh sách toàn bộ sản phẩm*/}
<ProductList
products={products}
addCart={addCart}
/>
<Footer/>
</div>
</div>
</div>
)
}
export default App