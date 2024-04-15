import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper';
import 'animate.css/animate.min.css';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';
import 'swiper/css';
// import pic from '../../'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Estates from './Estates';
import { useLoaderData, useRouteLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  const data = useLoaderData()
  // console.log(data[0)


  // animateCSS('.my-element', 'bounce');

  const { image, estate_title, segment_name, id } = data


  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='  '><img className='rounded-2xl w-full bg-cover h-[500px]' src={data[0].image} alt="" /></SwiperSlide>
        <SwiperSlide className='  '><img className='rounded-2xl w-full bg-cover h-[500px]' src={data[1].image} alt="" /></SwiperSlide>
        <SwiperSlide className='  '><img className='rounded-2xl w-full bg-cover h-[500px]' src={data[2].image} alt="" /></SwiperSlide>
        <SwiperSlide className='  '><img className='rounded-2xl w-full bg-cover h-[500px]' src={data[3].image} alt="" /></SwiperSlide>
        <SwiperSlide className='  '><img className='rounded-2xl w-full bg-cover h-[500px]' src={data[4].image} alt="" /></SwiperSlide>
        <SwiperSlide className='  '><img className='rounded-2xl w-full bg-cover h-[500px]' src={data[5].image} alt="" /></SwiperSlide>

        <div className="autoplay-progress h-3" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>

          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div className="lg:grid lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1150px] my-10">

        {
          data.map((d, id) => <Estates idx={id} data={d}></Estates>)
        }
      </div>

    </>
  );
}





export default Home;