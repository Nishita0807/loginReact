import React, { useState } from 'react'
import "../App.css";
function CartPage() {
    const [card1,setCard1]=useState(0);
    const [card2,setCard2]=useState(0);

    const [card3,setCard3]=useState(0);
    const [cartItems,setCartItems]=useState([]);
    
    const card1Price=25000;
    const card2Price=0.75;
    const card3Price=1.5;
    const addToCart=(name,qty,price)=>{
        if(qty>0){
            const newItem={name,qty,price};
            setCartItems([...cartItems,newItem]);
        }
    };
    const calculateTotal=()=>{
        let total=0;
        cartItems.forEach(item=>{
            total+=item.qty*item.price;
        });
        return total;
    }

  return (
    <div className='bitcoin'>
    <div className='card-list'>
    <div className='card'>
       <div className='details'>
       <div className='card-detail'>

       <div>BTC</div>
        <div>${card1Price}</div>
        </div>
       </div>
<div className='input'>
<input type="number" placeholder='Qty' value={card1} onChange={(e)=>setCard1(parseFloat(e.target.value))} step="any" min="0"/>
<button onClick={()=>addToCart("BTC",card1,card1Price)}>Add</button>
</div>
      </div>
      <div className='card'>
      <div className='details'>
      <div className='card-detail'>

        <div>DOGE</div>
        <div>${card2Price}</div>
        </div>
        </div>
        <div className='input'>

<input type="number" placeholder='Qty' value={card2} onChange={(e)=>setCard2(parseFloat(e.target.value))} step="any" min="0"/>
<button onClick={()=>addToCart("DOGE",card2,card2Price)}>Add</button>
     </div>
      </div>
      <div className='card'>
      <div className='details'>

        <div className='card-detail'>
        <div>RIPPLE</div>
        <div>${card3Price}</div>
        </div>
        </div>
        <div className='input'>

<input type="number" placeholder='Qty' value={card3} onChange={(e)=>setCard3(parseFloat(e.target.value))} step="any" min="0"/>
<button onClick={()=>addToCart("RIPPLE",card3,card3Price)}>Add</button>
      </div>
      </div>
    </div>

    <div className='cart'>
    <h2>My Cart</h2>
    <table style={{ display: 'flex', justifyContent: 'center' }}>
        <thead>
            <tr>
                <td>COIN</td>
                <td>QTY.</td>
                <td>AMOUNT</td>
            </tr>
        </thead>
        {cartItems.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.qty * item.price}</td>
            </tr>
        ))}
        <tr style={{textAlign:"right"}}>
       <td colSpan={3}>  TOTAL {calculateTotal()}</td>
        </tr>
    </table>
</div>

    </div>
  )
}

export default CartPage
