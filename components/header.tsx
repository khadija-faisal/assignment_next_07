'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNav = (): void => {
    setisClick(!isClick);
  };
  return (
    <div>
   <header className=" h-20 w-screen px-10  justify-between flex bg-slate-950 items-center shadow-lg ">
     <h1 className=" text-2xl text-white font-bold ">  <Link href={"/"}>Data Fetching</Link></h1>
     <button
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500
      "
            onClick={toggleNav}
          >
            {isClick ? (
              <Image
                src={"images/xmark-solid.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={"images//bars-solid.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            )}
          </button>
          </header>
          {isClick && (
        <div>
          <div className="px-2 bg-[#0d0d0d] pt-2 pb-5 space-y-1 sm:px-3">
            <ul className=" flex flex-col items-center text-lg p-3 bg-[#0d0d0d] text-slate-300 gap-5 border-b border-b-gray-900">
              <li className="hover:text-fuchsia-700 hover:underline">
                <Link href="/clientside">Client-Side</Link>
              </li>
              <li className="hover:text-fuchsia-700 hover:underline">
                <Link href="/serverside">Server-Side</Link>
              </li>
             
            </ul>
          </div>
        </div>
      )}
  
   </div>
  )
}

export default Header;