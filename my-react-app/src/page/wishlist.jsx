import React from "react";
import Wish from '../assets/wishlist/asset 23.png'
import Mouse from '../assets/wishlist/asset 2.png'
import Bord from '../assets/wishlist/asset 3.png'
import cctv from '../assets/wishlist/asset 4.png'
import Footer2 from "../component/footer2";
import Navbar from "../component/navbar";
import { AllTopBar } from "../component/Hometopbar/dropdown";


export const Wishlist = () => {
  return (
     <> 
     <div>
        <AllTopBar/>
     </div>
     <div>
       <Navbar/>
     </div>
    <div className="whish-list selection">
      <div className="image-section">
        <img src={Wish} className="" alt/>
      </div>

      <div className="table-section ">
          <div className="mx-64">
            <h1 className="text-2xl text-gray-900 font-semibold  mt-20">
              My Wish List On eTrade
            </h1>
          </div>
      </div>

      
      <div className="py-4 ml-64 bg-[#f6f7fb] flex justify-around w-9/12 items-center mt-5 text-xl font-semibold text-gray-800">
          <p className="">Product</p>
          <p className="ml-40">Unit Price</p>
          <p className="mr-48">Stoke Status</p>
      </div>
     
     <div className="flex  mx-64 items-center border-gray-100 border-b-2">
       <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300 font-bold ">X</i>
       <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Mouse} alt/>
       <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-10  ">
        Wireless PS Handler
       </p>
       <p className="text-[#777777] ml-60 font-semibold text-xl ">$124.00</p>
       <p className="text-[#777777] ml-72 font-semibold text-xl">	In Stock</p>
       <button className=" hover:text-white  font-semibold border border-gray-600 p-2 rounded ml-52  hover:bg-blue-500 duration-300 cursor-pointer" >add to cart</button>
     </div>

     <div className="flex  mx-64 items-center border-gray-100 border-b-2">
     <i class="fa-solid fa-xmark border w-8 h-8 rounded-full  text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300 "></i>
     <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Bord} alt/>
     <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-10 ">
     Gradient Light Keyboard
     </p>
     <p className="text-[#777777] ml-52 font-semibold text-xl ">$124.00</p>
       <p className="text-[#777777] ml-[20%] font-semibold text-xl">	In Stock</p>
       <button className="font-semibold border border-gray-600 p-2 rounded ml-52 hover:text-white hover:bg-blue-500 cursor-pointer" >add to cart</button>
     </div>

     <div className="flex  mx-64 items-center border-gray-100 border-b-2">
     <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-8 duration-300  font-sans font-bold">x</i>
     <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={cctv} alt/>
     <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-10 ">
     HD CC Camera
     </p>
     <p className="text-[#777777] ml-[21%] font-semibold text-xl ">$124.00</p>
       <p className="text-[#777777] ml-[20%] font-semibold text-xl">	In Stock</p>
       <button className="hover:bg-blue-700 hover:text-white   font-semibold border border-gray-600 p-2 rounded ml-52" >add to cart</button>

     </div>

     </div>
     <div>
      <Footer2/>
     </div>

    
    </>
  );
};
