import React, { useState } from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom';

function Menubar() {
  const [scroll, setScroll] = useState(false);
  function setFixed(){
    if(window.scrollY>20){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }
  window.addEventListener("scroll",setFixed)
  return (
    <div className={scroll ? 'navbar scrolled' : 'navbar'}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'100%'}}>

        <div className='items'>
          <Link to='/Home' id='logo'><h1>eBook Store</h1></Link>
        </div>

        <div className='items'>
          <Link className='main-menu icons eff' to='/Home'>Home</Link>
          <Link className='main-menu icons eff' to='/Cart'>Cart</Link>
          <Link className='main-menu icons eff' to='/Inventory'>Inventory</Link>
          <Link className='main-menu icons eff' to='/About'>About</Link>
          <Link className='main-menu icons eff' to='/'>Logout</Link>
        </div>

      </div>
    </div>
  )
}

export default Menubar