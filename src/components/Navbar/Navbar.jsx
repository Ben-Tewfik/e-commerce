import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="h-25">
      <nav className="w-full bg-white text-black fixed top-0 left-0 right-0 z-10 h-25">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 h-25">
          <div>
            <div className="flex items-center justify-between py-3  md:block">
              {/* LOGO */}
              <div className="text-2xl font-bold top-0 left-0">
                <Link href="/" className="top-0 left-0">
                  {" "}
                  <img
                    src="/So9ify-logo.ico"
                    alt="So9ify"
                    className="top-0 left-0 py-0 w-40 h-25"
                  />
                </Link>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close-button.png"
                      width={40}
                      height={40}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/Hamburger-icon.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-2 text-base  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-900  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-2 text-base py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/products" onClick={() => setNavbar(!navbar)}>
                    Browse
                  </Link>
                </li>
                <li className="pb-2 text-base  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link
                    href="/cart"
                    className="flex justify-center"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Cart{" "}
                    <img
                      src="/cart-icon.png"
                      alt="cart"
                      className="w-4 h-4 mt-1 ml-2"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
// const [isClick, setIsClick] = useState(false)
// const toggleNavbar = () => {
//   setIsClick(!isClick);
// }

//   return (
//     <nav id='top' className="bg-white p-2 text-white top-0 left-0 right-0 z-10">
//       <div className="container mx-auto flex justify-between items-center py-0">
//         <div>
//         {/* Logo */}
// <div className="text-2xl font-bold top-0 left-0">
//   <Link href="/" className='top-0 left-0'> <img src="/So9ify-logo.ico" alt="So9ify" className='top-0 left-0 py-0' /></Link>
// </div>
//         {/* Navigation Links */}
//         {/* <div className="flex justify-between space-x-4 text-black mt-3 px-10">
//           <Link href="/" className='pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent'>Home</Link>
//           <Link href="/products" className='pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent' >Browse Products</Link>
//           <Link href="/cart" className='flex justify-between pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent'>Cart <img src="/cart-icon.png" alt="cart" className='w-4 h-4 mt-2 ml-2' /></Link>
//         </div> */}
//         {/*MOBILE*/}
//         <div className='md:hidden flex items-center'>
//           <button
//           className='inline-flex items-center justify-center p-2 rounded-md text-black md:text-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600'
//           onClick={(toggleNavbar)}
//           >
//             {isClick ? (
//               <svg  className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor" >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"/>
// </svg>
//             ) : (
//               <svg  className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"/>
// </svg>
//             )}
//           </button>
//         </div>
//       </div>
//       <div
//         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//           isClick ? 'p-12 md:p-0 block' : 'hidden'
//         }`}
//       >
//         <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//           <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-900  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
//           <Link href="/"  onClick={() => setIsClick(!isClick)}>
//           Home
//             </Link>
//           </li>
//           <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
//           <Link href="/products" onClick={() => setIsClick(!isClick)}>
//           Browse Products
//             </Link>
//           </li>
//           <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
//           <Link href="/cart"  onClick={() => setIsClick(!isClick)}>
//           Cart <img src="/cart-icon.png" alt="cart" className='w-4 h-4 mt-2 ml-2' />
//             </Link>
//           </li>
//           <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
//             <Link href="#projects" onClick={() => setIsClick(!isClick)}>
//               Projects
//             </Link>
//           </li>
//         </ul>
//       </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
