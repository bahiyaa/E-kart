import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <>
    <div style={{width:'100%',height:"300px"}}
    className='d-flex justify-contentcenter align-items-center flex-column mt-5 bg-primary'>
      <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
            <div style={{width:'400px',color:'wheat'}}>
                <h4>
                <i style={{color:'white'}} class="fa-solid fa-cart-shopping fa-bounce me-3"></i>
                    E-KART</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptas asperiores quis eligendi autem earum labore quibusdam voluptatem repellat amet illum dolor, est velit minima. Consequatur nostrum perferendis atque possimus.</h6>
            </div>

            <div className='d-flex flex-column'>
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
                <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
            </div>

            <div className='d-flex flex-column'>
              <h4>Guides</h4>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} target='blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>Boots Watch</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter Email id' />
                <button className='btn btn-warning ms-2'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-evenly mt-3'>      
              <Link className='text-warning' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link className='text-warning' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-reddit fa-2x"></i></Link>
              <Link  className='text-warning'style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link  className='text-warning'style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>          
              </div>
            </div>
        </div>
        <p style={{color:'white'}}>Copyright &#169; 2024 E-Kart built with React Redux</p>
    </div>
    </>
  )
}

export default Footer