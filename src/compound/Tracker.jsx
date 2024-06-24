import React, { useState } from 'react'
import './Tracker.css'
const Tracker = () => {
    const [exp,Setexpense]=useState(0)
    const[formdata,Setdata]=useState({
        text:'',
        amount:0,
    });
    let salary=5000;
    const [balance,Setbalance]=useState(5000)
    const[history,Sethistory]=useState([""])
    const handleamount=(e)=>{
        e.preventDefault();
        const{text,amount}=formdata;
        console.log('Text:', text);
        console.log('Amount:', amount);
        let amounnumber=parseFloat(amount);
        Sethistory([
            ...history,{id:text,text:text,amount:amount}
        ]);
        Setbalance((balance)=>balance-amounnumber);
        Setexpense(salary-amounnumber)

   
    }
    const handlechance=(e)=>{
        const{name,value}=e.target;
        Setdata({
            ...formdata,
            [name]:value
        });
    }
  return (
    <div className='center'>
        <div>
        <h3 style={{textAlign:'center'}}>Expence Tracker</h3>
        <h4>Your Balance</h4>
        <h3>{balance}</h3>
        <div className='type'>
        <div className='income'>
            <h5>income</h5>
            <h3 style={{ color: 'green' }}>{salary}</h3>
        </div>
        <div className='Expence'>
            <h5>Expence</h5>
            <h3 style={{ color: 'red' }}>{exp}</h3>
        </div>
        </div>
        <h2>history</h2>
        <hr />
        <div>{}{history.map((h)=><li className='list' key={h.text}><h3>{h.text}</h3><h3>{h.amount}</h3></li>)}</div>
        <form onSubmit={handleamount}>
            <h3>Add new traction</h3>
            <hr />
            <label htmlFor="">Text <br/>
            <input type="text" name="text" placeholder='Enter text...' onChange={handlechance}/></label>
            <br /><label htmlFor="">Amount<br/><span>(negative-expense,postive-income)</span><br />
            <input type="number" name="amount" placeholder='Enter the Amount...' onChange={handlechance}/></label>
            <br />
            <button>Add tranction</button>
        </form>
        
        </div>
    </div>
  )
}

export default Tracker