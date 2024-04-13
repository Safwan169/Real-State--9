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
const Home = () => {
   
       
  // animateCSS('.my-element', 'bounce');



  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
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
        <SwiperSlide className=' border border-red-700 '><img className=' bg-cover h-[400px]' src="erasar.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress h-3" slot="container-end">
          <svg viewBox="0 0 10 10" ref={progressCircle}>
        
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        <Estates></Estates>
       
    </>
  );
}


    
  

export default Home;