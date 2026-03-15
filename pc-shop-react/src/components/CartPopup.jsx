import React from "react"
function CartPopup({cart,setShowCart}){
const total = cart.reduce(
(sum,item)=> sum + item.price * item.qty,
0
)
return(
<div className="cart-popup">
<div className="cart-box">
<h2>Giỏ hàng</h2>
{cart.length===0 && <p>Chưa có sản phẩm</p>}
{cart.map(item=>(
<div key={item.id} className="cart-item">
<img src={item.image} alt={item.name}/>
<div>
<p>{item.name}</p>
<p>Số lượng: {item.qty}</p>
<p>{(item.price*item.qty).toLocaleString()}đ</p>
</div>
</div>
))}
<h3>Tổng tiền: {total.toLocaleString()}đ</h3>
<button onClick={()=>setShowCart(false)}>
Đóng
</button>
</div>
</div>
)
}
export default CartPopup