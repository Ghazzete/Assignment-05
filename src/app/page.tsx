import React from "react";
import Header from "../../components/Header";
import Image from "next/image";

function HomePage() {
  return (
    <div className='h-screen'>
      <Header />
      <div className="flex h-[80%]">
         <div className="w-1/2 flex flex-col items-start ">
          <h1 className="font-bold text-4xl mt-20 pl-[189px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="mt-4 pl-[189px] font-semibold text-sm text-[#A29875]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className="ml-44 mt-10 text-white bg-[#A29875] w-[288px] h-[54px] rounded-lg ">Explore Now</button> 
            </div>
            <div className="w-1/2 flex justify-center items-center m-12">
          <Image 
          src={"image/figma-image.svg"}
          alt="hero image"
          width={311}
          height={647}
          />
        </div>
      </div>

    </div>
  )
}

export default HomePage;