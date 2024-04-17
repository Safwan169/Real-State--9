import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CiLocationOn } from 'react-icons/ci';
import { FaChartArea, FaCheckCircle } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const { id } = useParams()
    const pp = parseInt(id)
    const data = useLoaderData()
    const give = data.find(f => f.id == pp)
    // console.log(give,pp)

    return (
        <div>
            <Helmet>
                <title>LivingSpace | Details</title>
            </Helmet>
            <div className=''>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:gap-10 my-6 lg:h-[500px] lg:flex-row">
                        <img src={give.image} className="w-[425px] lg:h-[500px]  bg-cover py-4 md:py-0 lg:py-0 rounded-lg shadow-2xl" />
                        <div className=' text-left p-2 pt-10 '>
                            <h1 className="text-5xl font-bold">{give.estate_title}</h1>
                            <p className="font-semibold">{ }</p>
                            <p className="text-left mt-6  "><span className='font-bold'>Description :</span><span className='text-gray-500  font-medium'> {give.description}</span></p>
                            {/* clear */}
                            <div className="flex-col flex md:flex-row lg:flex-row lg:gap-20 md:gap-20">
                                <div className=''>
                                    <div className="flex gap-20 lg:flex-row md:flex-row md:gap-20 lg:gap-20 my-4 "><p className='text-2xl font-semibold  text-blue-500  text-start md:ml-1 lg:ml-1'>{give.price}</p>
                                        <p className='flex items-center gap-3  lg:ml-10 text-gray-500 text-xl md:ml-10 font-bold lg:mt-0 '><FaChartArea />{give.area}</p></div>
                                    <div className='flex-col flex lg:gap-10 gap-4 md:gap-10 lg:flex-row md:flex-row md:ml-1 lg:ml-1'>
                                        <p className='text-xl font-bold'>{give.segment_name}</p>
                                        <p className='text-xl text-gray-500 font-bold flex gap-2'><CiLocationOn className="mt-1  text-black" />{give.location}</p>

                                    </div>
                                    <div className="flex my-6 lg:md:gap-44 gap-40 md:ml-7 lg:ml-7">
                                        <p data-aos="slide-right" className=" text-white bg-lime-700 rounded-md lg:md:px-3 px-2 py-4 lg:md:py-1 font-semibold ">Featured</p>
                                        <p data-aos="slide-left" className="   text-white bg-orange-500 rounded-md px-3 py-1 font-semibold ">For {give.status}</p>


                                    </div>
                                </div>
                                <div className="  flex-col  lg:flex-col  md:flex-col md:items-start  gap-5 flex text-gray-500" >
                                    <span>
                                        <p className="text-xl underline  text-start ml-4 mt-4 font-bold text-amber-500">Facilities</p>

                                    </span>
                                    <span className='flex-row flex lg:flex-col md:flex-col  gap-6'>
                                        <p className=" font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle className="text-green-500 font-extrabold" /></span> {give.facilities[0]}</p>
                                        <p className=" font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle className="text-green-500 font-extrabold" /></span> {give.facilities[1]}</p>
                                        <p className=" font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle className="text-green-500 font-extrabold" /></span> {give.facilities[2]}</p>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Details;