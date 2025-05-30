"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import ContactBtn from "../common/ContactBtn";
import Image from "next/image";
import VerticleLines from "../../components/common/VerticalLines";

function Banner() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    });
  }, []);

  return (
    <div className="lg:h-[100vh] relative mx-auto" data-aos="fade-down">
      <Image
        src="/takshavi/banner.png"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className="w-full h-full"
        priority // Preload the image
      />

      <div
        className="lg:w-[80%] w-full absolute bottom-0 lg:py-12 lg:ml-40 md:ml-20 ml-5 pb-28"
        data-aos="fade-down"
      >
       <div>
       <h1 className="lg:text-7xl md:text-5xl text-3xl text-white poppins-light">
          Takshavi
        </h1>
        <h2 className="lg:text-7xl md:text-5xl text-3xl text-[#BBC6C9] poppins-light">
          by Ekaya Spaces
        </h2>
        <div class="flex py-12 content-between gap-x-2 sm:flex-row sm:justify-start sm:space-y-0">
          <div class="block">
            <h5 class="mb-2 lg:text-2xl text-[18px] font-light tracking-tight text-white">
              Frazer Town
            </h5>
          </div>
          <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block md:block hidden"></div>
          <hr className="h-px border-t w-9/12 border-white pb-4 mx-auto lg:hidden hidden" />
          <div class="block">
            <h5 class="mb-2 lg:text-2xl text-[18px] font-light tracking-tight text-white poppins-light">
              Bengaluru
            </h5>
          </div>
          <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block md:block hidden"></div>
          <hr className="h-px border-t w-9/12 border-white pb-4 mx-auto lg:hidden hidden" />
          <div class="block">
            <h5 class="mb-2 lg:text-2xl text-[18px] font-light tracking-tight text-white poppins-light">
              India
            </h5>
          </div>
        </div>
       </div>
      </div>
      <ContactBtn />
      <VerticleLines />
    </div>
  );
}

export default Banner;
