import React,{useState} from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import ProductSlider from "./components/ProductSlider"
import Footer from "./components/Footer"
import CartPopup from "./components/CartPopup"
import products from "./data/products"
import "./style.css"
function App(){
// ===== giỏ hàng =====
const [cart,setCart] = useState([])
const [showCart,setShowCart] = useState(false)
function addCart(product){
const exist = cart.find(item => item.id === product.id)
if(exist){
setCart(
cart.map(item =>
item.id === product.id
? {...item, qty: item.qty + 1}
: item
)
)
}else{
setCart([
...cart,
{...product, qty:1}
])
}
}
// ===== tổng số lượng trong giỏ =====
const totalQty = cart.reduce(
(sum,item)=> sum + item.qty,
0
)
// ===== tìm kiếm =====
const [keyword,setKeyword] = useState("")
// ===== bộ lọc =====
const [filters,setFilters] = useState({
price:"",
cpu:"",
gpu:"",
ram:"",
ssd:""
})
// ===== lọc sản phẩm =====
const filteredProducts = products.filter(p=>{
const matchName =
p.name.toLowerCase().includes(keyword.toLowerCase())
const matchPrice =
!filters.price ||
p.price <= Number(filters.price)
const matchCPU =
!filters.cpu ||
p.cpu.includes(filters.cpu)
const matchGPU =
!filters.gpu ||
p.gpu.includes(filters.gpu)
const matchRAM =
!filters.ram ||
p.ram.includes(filters.ram)
const matchSSD =
!filters.ssd ||
p.ssd.includes(filters.ssd)
return(
matchName &&
matchPrice &&
matchCPU &&
matchGPU &&
matchRAM &&
matchSSD
)
})
return(
<div>
<Header
cart={totalQty}
setShowCart={setShowCart}
keyword={keyword}
setKeyword={setKeyword}
filteredProducts={filteredProducts}
/>
<div className="container">
{/* ===== sidebar ===== */}
<div className="sidebar">
<h3>Danh mục sản phẩm</h3>
<ul>
<li>PC Gaming</li>
<li>PC Đồ họa</li>
<li>PC Streaming</li>
<li>PC Văn phòng</li>
</ul>
{/* ===== bộ lọc ===== */}
<h3>Lọc cấu hình</h3>
<select
onChange={(e)=>setFilters({...filters,price:e.target.value})}
>
<option value="">Giá</option>
<option value="15000000">Dưới 15tr</option>
<option value="20000000">Dưới 20tr</option>
<option value="25000000">Dưới 25tr</option>
</select>
<select
onChange={(e)=>setFilters({...filters,cpu:e.target.value})}
>
<option value="">CPU</option>
<option value="i3">Intel i3</option>
<option value="i5">Intel i5</option>
<option value="i7">Intel i7</option>
<option value="Ryzen">Ryzen</option>
</select>
<select
onChange={(e)=>setFilters({...filters,gpu:e.target.value})}
>
<option value="">GPU</option>
<option value="3050">RTX 3050</option>
<option value="3060">RTX 3060</option>
<option value="4060">RTX 4060</option>
<option value="4070">RTX 4070</option>
</select>
<select
onChange={(e)=>setFilters({...filters,ram:e.target.value})}
>
<option value="">RAM</option>
<option value="8GB">8GB</option>
<option value="16GB">16GB</option>
<option value="32GB">32GB</option>
</select>
<select
onChange={(e)=>setFilters({...filters,ssd:e.target.value})}
>
<option value="">SSD</option>
<option value="256GB">256GB</option>
<option value="512GB">512GB</option>
<option value="1TB">1TB</option>
</select>
</div>
{/* ===== content ===== */}
<div className="content">
<div className="banner">
<img src="/images/banner.jpg" alt="banner"/>
</div>
<ProductSlider
products={products}
addCart={addCart}
/>
<ProductList
products={filteredProducts}
addCart={addCart}
/>
<Footer/>
</div>
</div>
{/* ===== popup giỏ hàng ===== */}
{showCart && (
<CartPopup
cart={cart}
setShowCart={setShowCart}
/>
)}
</div>
)
}
export default App
