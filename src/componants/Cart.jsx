import React from 'react';





    
    return (
        <>
           <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row">
                    <img src={give.image} className="w-[425px] lg:h-[665px] bg-cover py-4 rounded-lg shadow-2xl" />
                    <div className=' text-left pl-10 pt-10 '>
                        <h1 className="text-5xl font-bold">{give.bookName}</h1>
                        <p className="py-6 font-semibold">By :{give.author}</p>
                        <p className="font-semibold">{give.category[0]}</p>
                        <p className="text-left py-5 my-6"><span className='font-bold'>Review :</span><span className='text-gray-500  font-medium'> {give.review}</span></p>
                        <p className="font-bold"><span>Tag :</span> <span className='text-green-400 font-bold mx-6'>#{give.tags[0]}</span><span className='text-green-400 font-bold'>#{give.tags[1]}</span></p>
                        <div className='my-14'>
                            <p className='text-gray-500 flex '><p className='w-52 text-left'>Number of Pages:</p><span className='text-black font-bold'>{give.totalPages}</span></p>
                            <p className='text-gray-500 flex my-3 '><p className='w-52 text-left '>Publisher:</p><span className='text-black font-bold'>{give.publisher}</span></p>
                            <p className='text-gray-500 flex mb-3'><p className='w-52 text-left '>Year of Publishing:</p><span className='text-black font-bold'>{give.yearOfPublishing}</span></p>
                            <p className='text-gray-500 flex mb-6 '><p className='w-52 text-left '>Rating:</p><span className='text-black font-bold'>{give.rating}</span></p>
                            <p className='flex gap-14 mt-10' ><button onClick={()=>notify1("sf1")} className='border-2 border-gray-400 rounded-2xl px-6 text-[18px] btn font-bold '>Read</button>     <Toaster position="top-right"
                                reverseOrder={false} /><button  onClick={()=>notify1("sf")} className='bg-blue-400 btn px-6 rounded-2xl hover:bg-blue-500 font-bold'>Wishlist</button><Toaster position="top-right"
                                    reverseOrder={false} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    );
}};

export default Cart;