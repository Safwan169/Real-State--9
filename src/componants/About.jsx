import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
    return (
        <div className='w-full  p-6 lg:p-0 lg:w-[1100px] mx-auto '>
              <Helmet>
            <title>LivingSpace | About Us</title>
          </Helmet>
            <p className='text-4xl font-black my-10'>About LivingSpace™</p>
            <p className='text-xl text-gray-500 font-semibold'>Founded in 1996 in Amsterdam, LivingSpace has grown from a small Dutch startup to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), LivingSpace mission is to make it easier for everyone to experience the world.


            </p>

            <p className='text-xl text-gray-500 font-semibold my-10'>By investing in the technology that helps take the friction out of travel, LivingSpace seamlessly connects millions of travellers with memorable experiences, a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, LivingSpace enables properties all over the world to reach a global audience and grow their businesses.</p>
            <p className='text-xl text-gray-500 font-semibold my-10'>LivingSpace is available in 43 languages and offers more than 28 million total reported accommodation listings, including over 6.6 million listings alone of homes, apartments and other unique places to stay. No matter where you want to go or what you want to do, LivingSpace makes it easy and backs it all up with 24/7 customer support.</p>
            <div className='flex gap-10 text-center justify-center my-10'>
            <FaFacebook size={40} className='  text-blue-600' />
            <FaInstagram size={40} className='text-red-600' />
            <FaGithub size={40} className='text-gray-500'/>
            <FaLinkedinIn size={40} className='text-blue-700' />



            </div>
        </div>
    );
};

export default About;