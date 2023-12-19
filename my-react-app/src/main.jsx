import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Signin from './page/Signin'
import Signup from './page/Signup'
import Forgetpass from './page/forgetpass'
import Reset from './page/reset'
import Policy from './page/Policy'
import Coming from './page/comingsoon'
import Error from './page/error'
import Account from './page/account'
import Typography from './page/Typography'
import { Wishlist } from './page/wishlist'
import { Checkout } from './page/checkout'
import Blog from './blog/bloglist'
import Grid from './blog/bloggrid'
import Standard from './blog/Stander'
import Gallery from './blog/Gallery'
import Video from './blog/video'
import Audio from './blog/audio'
import Quote from './blog/qoete'
import Shopnoslider from './shop/shopslider'
import Shopwithslider from './shop/shopwithslider'
import Variation1 from './shop/variation1'
import Variation2 from './shop/variation2'
import Variation3 from './shop/variation3'
import Variation4 from './shop/variation4'
import Variation5 from './shop/variation5'
import Navbar from './component/navbar'
import Variation6 from './shop/variation6'
import Variation7 from './shop/variation7'
import About from './about'
import { AllTopBar } from './component/Hometopbar/dropdown'
import Footer2 from './component/footer2'
import HomeHoverPhoto from './component/HOMEHOVERPHOTO'
import HomeService from './component/Homeservice'
import { TopBar } from './component/hometopbar2/hometopbar'
import Home2 from './component/Home2'


import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Contact from './contact'

import HomeNavBar from './component/Homenavbar'
import Cart from './page/cart'













ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>


        {/* *******Home******* */}
    
     <Route path='/' element={<Home2/>}></Route>
    
    
      {/* *****componemnt****** */}
     
           {/* <Navbar/> */}
           {/* <Footer2/> */}
           {/* <TopBar/> */}
           {/* <AllTopBar/> */}
           {/* <HomeHoverPhoto/> */}
           {/* <HomeService/> */}

          {/* **********page********    */}
          
     <Route path='/wishlist' element ={<Wishlist/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
     <Route path='/chechout' element ={<Checkout/>}></Route>
     <Route path='/account' element ={<Account/>}></Route>
     <Route path='/signup' element ={<Signup/>}></Route>
     <Route path='/signin' element ={<Signin/>}></Route>
     <Route path='/forget' element ={<Forgetpass/>}></Route>
     <Route path='/reset' element ={<Reset/>}></Route>
     <Route path='/privacy' element ={<Policy/>}></Route>
     <Route path='/comingsoon' element ={<Coming/>}></Route>
     <Route path='/error' element ={<Error/>}></Route>
     <Route path='/typography' element ={<Typography/>}></Route>

  
     <Route path='/about' element ={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

     


                           {/* *********shop********* */}
            
     <Route path='/shopsliderbar' element ={<Shopwithslider/>}></Route>
     <Route path='/shopnoslider' element ={<Shopnoslider/>}></Route>
     <Route path='/variation1' element ={<Variation1/>}></Route>
     <Route path='/variation2' element ={<Variation2/>}></Route>
     <Route path='/variation3' element ={<Variation3/>}></Route>
     <Route path='/variation4' element ={<Variation4/>}></Route>
     <Route path='/variation5' element ={<Variation5/>}></Route>
     <Route path='/variation6' element ={<Variation6/>}></Route>
     <Route path='/variation7' element ={<Variation7/>}></Route>



                          
                      {/* ********blog******* */}

           <Route path='/bloglist' element ={<Blog/>}></Route>
           <Route path='/bloggrid' element ={<Grid/>}></Route>
           <Route path='/standard' element ={<Standard/>}></Route>
           <Route path='/gallery' element ={<Gallery/>}></Route>
           <Route path='/video' element ={<Video/>}></Route>
           <Route path='/audio' element ={<Audio/>}></Route>
           <Route path='/quote' element ={<Quote/>}></Route>

        
          
      </Routes>
    </BrowserRouter>

     {/* <HomeNavBar/> */}
  
  </React.StrictMode>,
)
