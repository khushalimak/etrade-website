import React from "react";
import { TopBar } from "./hometopbar2/hometopbar";
import Navbar from "./navbar";
import img1 from '../assets/Homepage/asset 8.png'
import img2 from '../assets/Homepage/asset 9.png'
import headphone from '../assets/Homepage/asset 6.png'
import watch from '../assets/Homepage/asset 7.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {  Pagination} from 'swiper/modules'
import {Zoom} from 'swiper/modules'
import '../component/Homestyle.css'
import img3 from '../assets/Homepage/asset 20.png'
import img4 from '../assets/Homepage/asset 31.png'
import img5 from '../assets/Homepage/asset 29.png'
import img6 from '../assets/Homepage/asset 30.png'
import img7 from '../assets/Homepage/asset 32.png'
import img8 from '../assets/Homepage/asset 32.png'
import img9 from '../assets/Homepage/asset 33.png'
import img10 from '../assets/Homepage/asset 34.png'
import img11 from '../assets/Homepage/asset 35.png'
import img12 from '../assets/Homepage/asset 36.png'
import img13 from '../assets/Homepage/asset 37.png'
import img14 from '../assets/Homepage/asset 38.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeService from "./Homeservice";
import HomeHoverPhoto from "./HOMEHOVERPHOTO";
import Footer2 from "./footer2";







const Home2 = () => {
    const settings = {
        dots: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 5,
        infinite: true,
        arrows: true,

    };

    
    return (
        <>
            <div className='Body bg-white ' id='top'>
                <section className='HOME-DROPDOWN py-2 '>
                    <TopBar />
                </section>
                 

                <section className='HOME-NAVBAR sticky top-2 z-50'>
                    <Navbar />
                </section>

                <section className='HERO-SECTION bg-[#F9F3F0] -top-36 h-[800px] relative overflow-hidden flex'>
                    <div className='BACKGROUND-IMG'>
                        <img className='absolute right-96 -bottom-20' src={img1} alt="" />
                        <img className='absolute right-10 -bottom-12' src={img2} alt="" />
                    </div>
                    <div className="container mx-auto w-[1490px]">
                        <div className='BACKGROUND-DETAIL absolute top-80'>
                            <div className='flex mb-4'>
                                <i className="ri-fire-fill h-6 w-6 text-base bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'> Hot Deal In This Week</h1>
                            </div>
                            <p className='font-bold text-6xl text-[#292930] tracking-wide leading-[75px] mb-10'>Roco Wireless<br /> Headphone</p>

                            <div className='flex items-center'>
                                <div className="BUTTON">
                                    <a href="#" className="px-9 py-3 z-10 bg-white font-bold rounded-md relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                 before:bg-white
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-md
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                        <i className="ri-shopping-cart-line mr-2"></i> Shop Now</a>
                                </div>

                                <div className='flex ml-8'>
                                    <div className="IMAGES-CIRCLE">
                                        <ul className="flex">
                                            <li className=" border-2 rounded-full "><img src="./src/assets/Home/asset 2.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 3.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 4.png" alt="" /></li>
                                            <li className="-ml-5 border-2 rounded-full border-white" ><img src="./src/assets/Home/asset 5.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className='STARS ml-5'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>


                            <Swiper className="mySwiper swiper-container w-[840px] pr-[150px]  absolute -right-[35%] top-48 z-10 " slidesPerView={2}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={{ clickable: true }}
                                onSlideChange={() => { Zoom }}
                                onReachEnd={() => { false }}
                                loop={() => { true }}
                                modules={[Pagination]}


                            >


                                <SwiperSlide className=''><img className='image-1' src={headphone} alt="" />
                                    <div className='round w-24 h-24 text-center pt-4 absolute top-10 right-[50%] z-10 bg-white  rounded-full transition-[0.5s]'>
                                        <h1 className='text-gray-500 text-base'>From</h1>
                                        <h3 className='font-bold text-lg text-blue-500'>$ 49.00</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=''><img className='image-1' src={watch} alt="" />
                                    <div className='round w-24 h-24 text-center pt-4 absolute top-10 right-[50%] z-10 bg-white  rounded-full'>
                                        <h1 className='text-gray-500 text-base'>From</h1>
                                        <h3 className='font-bold text-lg text-blue-500'>$ 49.00</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img className='image-1' src={headphone} alt="" /></SwiperSlide>
                                <SwiperSlide><img className='image-1' src={watch} alt="" /></SwiperSlide>
                            </Swiper>


                        </div>
                    </div>
                </section>

                <section className='HEADPHONES-PHOTO mb-[100px] container mx-auto '>
                <div className='relative w-full h-[500px] rounded-md bg-[#F6F7FB] '>
                <img className='absolute right-48 -top-24' src={img3} alt="" />
                <div className='music-signal'>
                            <div className='item-circle circle-1'></div>
                            <div className='item-circle circle-2'></div>
                            <div className='item-circle circle-3'></div>
                            <div className='item-circle circle-4'></div>
                            <div className='item-circle circle-5'></div>
                        </div>

                        <div className='absolute top-16 left-16'>
                            <div className='flex mb-3'>
                                <i className="ri-headphone-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Don’t Miss!!</h1>
                            </div>
                            <p className='font-bold text-5xl text-[#292930] leading-tight tracking-wide'>Enhance Your<br /> Music Experience</p>
                            <div className='flex my-[30px]'>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-7 mr-4 '>
                                    <p className='flex justify-center text-2xl'>0</p>
                                    <p className='text-sm text-gray-500 font-medium '>Day</p>
                                </div>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                    <p className='flex justify-center text-2xl'>00</p>
                                    <p className='text-sm text-gray-500 font-medium '>Hrs</p>
                                </div>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                    <p className='flex justify-center text-2xl'>00</p>
                                    <p className='text-sm text-gray-500 font-medium '>Min</p>
                                </div>
                                <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                    <p className='flex justify-center text-2xl'>00</p>
                                    <p className='text-sm text-gray-500 font-medium '>Sec</p>
                                </div>
                            </div>

                            <div className='relative group z-10 '>
                                <a href='#' className='absolute px-9 py-4 text-white font-bold rounded-md bg-[#3577F0]  
                                before:content-[""]
                                before:w-[162px]
                                before:[50px]
                                before:bg-[#3577F0]  
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                                >Check it Out!</a>
                            </div>
                        </div>
                     </div>
                </section>

                <section className='FEED-BACK'>
                    <div className='bg-[#F9F3F0] py-24 '>
                        <div className='container mx-auto'>
                            <div className="flex justify-between ">
                                <div className='mb-10'>
                                    <p className="text-[#FF497C] font-medium mb-2"><i class="ri-double-quotes-l bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>Testimonials</p>
                                    <h1 className="font-bold text-4xl text-[#292930]  tracking-wide">Users Feedback</h1>
                                </div>
                                <div className='text-gray-400'>
                                    <div className='hover:scale-110 duration-300 inline-block'>
                                        <a href="#" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></a>
                                    </div>
                                    <div className='hover:scale-110 duration-300 inline-block '>
                                        <a href="#" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-10'>
                                <div>
                                    <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg'>
                                        <p>“ It’s amazing how much easier it has been to
                                            meet new people and create instantly non
                                            connections. I have the exact same personal
                                            the only thing that has changed is my mind
                                            set and a few behaviors. “</p>
                                    </div>
                                    <div className='flex items-center mt-10'>
                                        <img src={img4} alt="" />
                                        <div className='ml-5'>
                                            <h1 className='text-gray-500'>Head Of Idea</h1>
                                            <h1 className='font-semibold text-lg text-[#292930] tracking-wide'>James C. Anderson</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg'>
                                        <p>“ It’s amazing how much easier it has been to
                                            meet new people and create instantly non
                                            connections. I have the exact same personal
                                            the only thing that has changed is my mind
                                            set and a few behaviors. “</p>
                                    </div>
                                    <div className='flex items-center mt-10'>
                                        <img src={img5} alt="" />
                                        <div className='ml-5'>
                                            <h1 className='text-gray-500'>Head Of Idea</h1>
                                            <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg'>
                                        <p>“ It’s amazing how much easier it has been to
                                            meet new people and create instantly non
                                            connections. I have the exact same personal
                                            the only thing that has changed is my mind
                                            set and a few behaviors. “</p>
                                    </div>
                                    <div className='flex items-center mt-10'>
                                        <img src={img6} alt="" />
                                        <div className='ml-5'>
                                            <h1 className='text-gray-500'>Head Of Idea</h1>
                                            <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
    <section className='TRADE-STORE container mx-auto'>
    <div>
                        <div className='mt-14'>
    <div className='mb-12 text-center'>
                                <p className="text-[#8C71DB] font-medium mb-2"><i class="ri-shining-2-fill bg-[#8C71DB] p-1 text-white rounded-full text-center mr-3"></i>Most Sold</p>
                                <h1 className="font-bold text-4xl text-[#292930] ">Most Sold in eTrade Store</h1>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8'>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img7} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</h1>
                                        <p className='text-xl font-bold'>$29.99 <span className='text-gray-300 ml-2'><del>$49.99</del></span></p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i className="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i className="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img8} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</h1>
                                        <p className='text-xl font-bold'>$49.99 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img9} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>120+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Gaming Controller</h1>
                                        <p className='text-xl font-bold'>$50.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i className="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i className="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img10} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>30+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Wall Mountr</h1>
                                        <p className='text-xl font-bold'>$19.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img11} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>700+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Lenevo Laptop</h1>
                                        <p className='text-xl font-bold'>$999.99 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img12} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>300+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Juice Grinder Machine</h1>
                                        <p className='text-xl font-bold'>$99.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img13} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Wireless Headphone</h1>
                                        <p className='text-xl font-bold'>$59.99 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                            <div className='flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]'>
                                <div className='flex items-center '>
                                    <div className='overflow-hidden rounded-md'>
                                        <img className='rounded-md group-hover:scale-110 duration-500' src={img14} alt="" />
                                    </div>
                                    <div className='pl-8 leading-7'>
                                        <div className='flex items-center'>
                                            <span className='text-[#FFA800]'>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-line"></i>
                                            </span>
                                            <div>
                                                <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Asus Zenbook Laptop</h1>
                                        <p className='text-xl font-bold'>$899.00 </p>
                                    </div>
                                </div>
                                <div >
                                    <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                    <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
             </section>
             <section className='HOME-SERVICES '>
                    <HomeService />
                    </section>


                    <section className='HOME-FOOTER '>
                    <HomeHoverPhoto />
                    {/* <SubscribePhoto /> */}
                    <Footer2/>
                </section>

            </div>

        </>
    )
}
export default Home2