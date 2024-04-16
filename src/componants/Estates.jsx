import "animate.css"
import { CiLocationOn } from "react-icons/ci";

import { FaChartArea } from "react-icons/fa";
import { Navigate, useNavigate, useNavigation } from "react-router";
const Estates = ({ data }) => {
    // console.log(data)
    const { image, area, estate_title, price, status, location, segment_name ,id} = data
    // console.log(id)
    const navigate=useNavigate()
    const details=()=>{
        navigate(`/data/${id}`)
        
    }
    return (
        <div   data-aos="zoom-in-left">
            <div className="hd shadow-2xl w-svw border-2 border-yellow-200 h-min lg:w-[375px]  lg:pl-0 1 rounded-2xl mt-4 lg:mt-0">
                <div className="card card-compact flex items-center  bg-base-100 text-center  shadow-xl h-[550px] ">
                    <figure className="w-[230px] md:w-[500px] lg:w-[375px] lg:mx-auto"><img className="hero-overlay bg-opacity-60  mt-5 lg:mt-0 lg:w-full h-[230px] bg-cover rounded-xl  " src={image} alt="image" /></figure>
                    <div className="card-body  w-full ">
                        <div className="h-[80px]">
                            <p data-aos="slide-down" className="text-2xl font-semibold w-[300px]  hv text-start ml-4   ">{estate_title}</p>

                        </div>

                        <div data-aos="slide-up" className="text-gray-500 flex justify-between  w-[330px] text-xl font-bold  text-start ">
                            <p className="text-2xl font-semibold  text-blue-500  text-start ml-4  ">{price}</p>
                            <span className="flex items-center gap-3 ml-10 
                            "><FaChartArea />
                            {area}

                            
                            </span>

                        </div>
                       

                        <p data-aos="slide-left" className="absolute top-4 right-5  md:right-5 lg:right-[20px] text-white bg-orange-500 rounded-md px-3 py-1 font-semibold ">For {status}</p>
                        <p data-aos="slide-right" className="absolute top-4 left-3 text-white bg-lime-700 rounded-md px-3 py-1 font-semibold ">Featured</p>


                        
                        
                        <div data-aos="fade-up-right" className=" font-bold mt-2 text-[18px] text-start ml-4 ">
                            {segment_name}
                        </div>

                        <div data-aos="fade-up-left" className="text-gray-500 font-bold flex mt-2 w-[300px] gap-2 text-start ml-4 ">
                            <CiLocationOn className="mt-1 text-black" />
                            <span>Location : {location}</span>
                        </div>
                        <div data-aos="zoom-in-up" className="flex mt-3  justify-end w-[350px] 0 text-green-500 font-bold">
                            <button onClick={()=>details()} className="btn bg-orange-500 rounded-2xl text-white hover:bg-orange-600 font-semibold">view Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Estates;