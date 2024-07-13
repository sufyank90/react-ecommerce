import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Detail from './components/Detail'
import LoginSignup from './components/auth/LoginSignup';

function App() {

  
  return (
    <>
      
      <LoginSignup/>


      {/* Sidebar */}
      <div className="flex">
        <div className="w-1/6 mt-10">
          <div className="bg-gray-800 rounded-3xl p-2 mr-4">
            <div className="text-white">
              <a href="#link1" className="flex items-center border-2 bg-white text-1xl rounded-full text-black p-5 mb-2">
                <svg className="w-6 h-6  mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Home
              </a>
              <a href="#link1" className="flex items-center border-2 hover:bg-white text-1xl rounded-full text-white hover:text-black p-5 mb-2">
                <svg className="w-6 h-6  mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Earn
              </a>
              <a href="#link1" className="flex items-center border-2 hover:bg-white text-1xl rounded-full text-white hover:text-black p-5 mb-2">
                <svg className="w-6 h-6  mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Convert
              </a>
              <a href="#link1" className="flex items-center border-2 hover:bg-white text-1xl rounded-full text-white hover:text-black p-5 mb-2">
                <svg className="w-6 h-6  mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Sport Trading
              </a>
              <a href="#link1" className="flex items-center border-2 hover:bg-white text-1xl rounded-full text-white hover:text-black p-5 mb-2">
                <svg className="w-6 h-6  mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Future
              </a>

            </div>
          </div>
        </div>
        <div className="w-5/6 mt-11 bg-black rounded-3xl relative overflow-hidden" style={{ height: '385px' }}>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-summer-seychelles-beach-with-palms-and-rocks-free-photo.jpeg?w=2210&quality=70" alt="Sample Image" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Mega Summer Sale - Up to 50% Off Everything!</h1>
            <p className="text-lg">Dive into the season of savings with our Mega Summer Sale! Enjoy up to 50% off on a wide range of products, from stylish apparel to must-have accessories. Don’t miss out on this chance to elevate your summer style while saving big.</p>
          </div>
        </div>

      </div>

     









  <section class="bg-white dark:bg-gray-900 shadow-xl mt-5">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Discover What’s New 😊 ?</h1>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Fresh Arrivals Await!</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Be the first to explore our latest arrivals! Discover a curated collection of new products that reflect the latest trends and styles. Whether you're upgrading your wardrobe or refreshing your home, find something new to love every day.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Learn more
            </a>  
        </div>
    </div>
</section>




<div className="flex flex-col items-center">
  <div className="w-full mt-10">
    <p className="text-4xl text-black text-center font-bold">Product Description</p>
  </div>


  <div className="grid gap-6 mt-6 w-full  max-w-screen-xl px-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  {Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
      <a href="#">
        <img className="p-8 rounded-t-lg w-full" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, starIndex) => (
              <svg
                key={starIndex}
                className={`w-4 h-4 ${starIndex < 4 ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
      </div>
    </div>
  ))}
</div>

</div>






    </>
  )
}

export default App
