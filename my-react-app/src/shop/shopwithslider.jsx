import React from "react";
import alexa from '../assets/policy/asset 2.png'
import Footer2 from "../component/footer2";
import Navbar from "../component/navbar";
import { AllTopBar } from "../component/Hometopbar/dropdown";

export default function Shopwithslider(){
    return(
        <>
            <div>
              <AllTopBar/>
            </div>
            <div>
               <Navbar/>
            </div>

            <div className="FIRST-PART flex bg-[#f8f8f8] justify-between py-12 ">
        <div className="mx-16">
          <p className="text-gray-400 font-semibold">
            Home | <span className="text-blue-500">My Account</span>
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-5">Explore All Products</h1>
        </div>
        <div className="mx-16">
          <img className="" src={alexa}></img>
        </div>
      </div>

      
      <div>
        <Footer2/>
      </div>
        </>
    )
}