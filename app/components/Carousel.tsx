'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-0 right-0 flex items-center justify-center h-[100%] z-10 bg-white bg-blur-lg bg-opacity-40">
      <button
        className={`bg-white border border-gray-300 rounded-full p-[7px]`}
        onClick={onClick}
      >
        <FaAngleRight color='black' size={20}/>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center h-[100%] z-10 bg-blur-lg bg-opacity-40">
      <button
        className={'bg-white border border-gray-300 rounded-full p-[7px]'}
        onClick={onClick}
      >
        <FaAngleLeft size={20} color='black'/>
      </button>
    </div>
  );
}

const SimpleSlider = ({itemArray}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
    ]
  };

  return (
    <Slider {...settings}>
      {itemArray.map((item:JSX.Element, idx:number) => {
        return (
          <div className="" key={idx}>{item}</div>
        )
      })}
    </Slider>
  );
}

export default SimpleSlider;
