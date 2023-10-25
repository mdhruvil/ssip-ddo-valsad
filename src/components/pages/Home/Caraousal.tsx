"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Props = {};

function MainCaraousal({}: Props) {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop>
        <div className="px-4 pb-8 pt-4">
          <img
            src="https://source.unsplash.com/random/900x600?fruit"
            className="rounded-[2rem]"
          />
        </div>
        <div className="px-4 pb-8 pt-4">
          <img
            src="https://source.unsplash.com/random/900x600?girl"
            className="rounded-[2rem]"
          />
        </div>
        <div className="px-4 pb-8 pt-4">
          <img
            src="https://source.unsplash.com/random/900x600?boy"
            className="rounded-[2rem]"
          />
        </div>
        <div className="px-4 pb-8 pt-4">
          <img
            src="https://source.unsplash.com/random/900x600?building"
            className="rounded-[2rem]"
          />
        </div>
        <div className="px-4 pb-8 pt-4">
          <img
            src="https://source.unsplash.com/random/900x600"
            className="rounded-[2rem] "
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MainCaraousal;
