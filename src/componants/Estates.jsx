import "animate.css"
import { CiLocationOn } from "react-icons/ci";

import { FaChartArea, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
const Estates = ({ data }) => {
    // console.log(data)
    const { image, area, estate_title, price, status, location, segment_name ,id,facilities} = data
    // console.log(id)
    const navigate=useNavigate()
    const details=()=>{
        navigate(`/data/${id}`)
        
    }
    return (
        <div data-aos="zoom-in-left ">
            <div className="hd shadow-2xl w-full border-2 border-yellow-200 h-min lg:w-[378px]  lg:pl-0 1 rounded-2xl mt-4 lg:mt-0">
                <div className="card card-compact flex items-center mt-4 lg:mt-0  bg-base-100 text-center  shadow-xl h-[600px] ">
                    <figure className="w-[230px] md:w-[500px] lg:px-1 lg:w-[375px] lg:mx-auto"><img className="hero-overlay bg-opacity-60  mt-5 lg:mt-0 lg:w-full h-[240px] bg-cover rounded-xl  " src={image} alt="image" /></figure>
                    <div className="card-body  w-full ">
                        <div className="h-[80px]">
                            <p data-aos="slide-down" className="text-2xl font-semibold w-[339px] md:w-full md:text-center lg:text-start  hv text-start ml-2  ">{estate_title}</p>

                        </div>
                        <div className="md:flex lg:flex-col md:justify-between">
                            <div className=" h-[108px] lg:w-full md:w-1/2">


                                <div data-aos="slide-up" className="text-gray-500 flex lg:flex  md:h-fit lg:w-full   lg:items-center items-center  lg:justify-between  w-[330px]  text-xl font-bold  text-start ">
                                    <p className="text-2xl font-semibold  text-blue-500  text-start ml-4  ">{price}</p>
                                    <span data-aos="slide-up" className="flex items-center gap-3 ml-10 md:ml-4 lg:mt-0 "><FaChartArea />
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
                               
                            </div>
                          <div data-aos="fade-up-right">
                          <p className="text-xl text-start ml-4 mt-4 font-bold text-amber-600">Facilities</p>

                          <div className="md:visible    lg:flex-row  md:flex-col md:items-start mt-4  flex text-gray-500" >
                              <p className="items-center justify-center font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle  className="text-green-500 font-extrabold" /></span> {facilities[0]}</p>
                              <p className="items-center justify-center font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle  className="text-green-500 font-extrabold" /></span> {facilities[1]}</p>
                              <p className="items-center justify-center font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle  className="text-green-500 font-extrabold" /></span> {facilities[2]}</p>
                             
                            </div>
                          </div>
                        </div>
                        <div data-aos="zoom-in-up" className="flex mt-3  justify-end w-[350px] md:w-full  text-green-500 font-bold">
                            <button onClick={()=>details()} className="btn bg-orange-500 rounded-2xl text-white hover:bg-orange-600 font-semibold">view Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Estates;