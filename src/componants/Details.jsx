import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const {id}=useParams()
    const pp=parseInt(id)
    const data=useLoaderData()
    const give=data.find(f=>f.id==pp)
    // console.log(give,pp)
 
    return (
        <div>
                <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row">
                    <img src={give.image} className="w-[425px] lg:h-[665px] bg-cover py-4 rounded-lg shadow-2xl" />
                    <div className=' text-left pl-10 pt-10 '>
                        <h1 className="text-5xl font-bold">{give.estate_title}</h1>
                        <p className="py-6 font-semibold">By :{give.segment_name}</p>
                        <p className="font-semibold">{}</p>
                        <p className="text-left py-5 my-6"><span className='font-bold'>Description :</span><span className='text-gray-500  font-medium'> {give.description}</span></p>
                        <p className="font-bold"><span>Tag :</span> <span className='text-green-400 font-bold mx-6'>#{}</span><span className='text-green-400 font-bold'>#{}</span></p>
                        <div className='my-14'>
                            <p className='text-gray-500 flex '><p className='w-52 text-left'>Number of Pages:</p><span className='text-black font-bold'>{}</span></p>
                            <p className='text-gray-500 flex my-3 '><p className='w-52 text-left '>Publisher:</p><span className='text-black font-bold'>{}</span></p>
                            <p className='text-gray-500 flex mb-3'><p className='w-52 text-left '>Year of Publishing:</p><span className='text-black font-bold'>{}</span></p>
                            <p className='text-gray-500 flex mb-6 '><p className='w-52 text-left '>Rating:</p><span className='text-black font-bold'>{}</span></p>
                            {/* <p className='flex gap-14 mt-10' ><button className='border-2 border-gray-400 rounded-2xl px-6 text-[18px] btn font-bold '>Read</button>     <Toaster position="top-right"
                                reverseOrder={false} /><button  className='bg-blue-400 btn px-6 rounded-2xl hover:bg-blue-500 font-bold'>Wishlist</button><Toaster position="top-right"
                                    reverseOrder={false} /></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        </div>
    );
};

export default Details;