import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray=useSelector((state)=> state.cartReducer);
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const [total,setTotal] =useState(0)
  const getTotal=()=>{
    let sum=0;
    cartArray.forEach((item) => {
      sum=sum+item.price;
      
    })
    setTotal(sum)
  }
  useEffect(()=>{
    getTotal();
  },[cartArray])
  const handleCart=()=>{
    alert("Thank you... Your order placed successfully");
    dispatch(emptyCart());
    navigate('/')
  
  }
  return (
    <>
    <div style={{marginTop:'100px'}}>
       
        {
          cartArray?.length > 0?
          <div className='row w-100'>
          <div className='col-lg-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray?.map((item,index)=>(
                  <tr>
                <td>{index+1}</td>
                <td>{item.title.slice(0,20)}...</td>
                <td><img src={item.image} height="75px" width="75px"></img></td>
                <td> &#8377;{item.price}</td>
                <td><Button variant="outline-danger" onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash" ></i></Button>
                </td>
               </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
        <div className='col-lg-4'>
          <div className='border shadow p-5'>
            <h3 className='text-primary'>Cart Summary</h3>
            <h5>Total Number of products: <span className='text-warning fw-bold'>{cartArray?.length}</span></h5>
            <h5>Total Price:<span className='text-warning fw-bold'>₹ {total}</span> </h5>
            <button className='btn btn-success rounded w-100' onClick={handleCart}>CHECKOUT</button>
          </div>
        </div>
        </div>
        
        :
        <div>
          <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://aleointernational.com/img/empty-cart-yellow.png" height='300px' alt="" />
       
      </div>
        </div>
        }
        

       </div>
   
    </>
  )
}

export default Cart