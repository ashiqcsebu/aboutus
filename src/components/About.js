import React from 'react';
import photo from '../asset/about.jpg';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <h1 className='text-center my-8 font-bold lg:text-5xl text-6xl'>About Us</h1>
            <div className="mx-8 my-20 ">

                <div className=" flex flex-col lg:flex-row  ">

                    <div className='lg:mr-20 lg:mt-36'>
                        <h1 className=' lg:text-start  font-bold lg:text-6xl text-center text-3xl '>This Headline Grabs Visitors’ Attention</h1>
                        <p className="lg:text-start lg:text-2xl md:text-xl text-center mt-6 ">A short description introducing visitors to your business and the services you offer</p>
                        <div className='flex justify-center lg:block'>
                            <button className="mt-6 btn px-12 border-white hover:border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 text-white  rounded-full">Contact Us</button>

                        </div>
                    </div>
                    <div >
                        <img src={photo} className="rounded-sm mt-10 lg:h-[700px] lg:w-[1600px]" alt='' />
                    </div>
                </div>
            </div>

            <div className='lg:grid grid-cols-2 px-4 lg:px-10'>

                <div class="grid grid-cols-2 md:ml-5 ">

                    <div className=' flex-col lg:pl-12 mt-12 '>
                        <img src={photo} className=" w-60 h-60 lg:w-40 lg:h-40 lg:ml-20 lg:my-5  p-2" alt="" />
                        <img src={photo} className="w-40 h-40 lg:w-60 lg:h-60 p-2 " alt="" />

                    </div>

                    <div className=' my-6  '>
                        <img src={photo} className="w-40 h-40 lg:w-60 lg:h-60 lg:my-5 py-2" alt="" />
                        <img src={photo} className="w-60 h-60 lg:w-40 lg:h-40 py-2" alt="" />
                    </div>
                </div>

                <div className='lg:mt-32'>
                    <h1 className='lg:text-start  font-bold lg:text-6xl text-center text-3xl mt-20'>About Us</h1>
                    <p className="lg:text-start lg:mr-48 text-md text-center mt-6 mr-5">Use this section to describe your company and the services you offer. You could share your company’s story and details about why you are in business. The goal is to create a connection with the visitor and give them confidence to work with you.</p>
                    <div className='flex justify-center lg:block'>
                        <button className="mt-6 btn px-12 border-white hover:border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 text-white  rounded-full">Learn More</button>

                    </div>
                </div>
            </div>

            <div className='mt-32'>
                <h1 className='text-center font-bold text-4xl mb-4 md:text-7xl'>Our Team</h1>
                <p className="text-center lg:text-2xl md:text-xl py-5 mb-4">This text briefly introduces visitors to your main services.</p>

                <div className=" grid md:grid-cols-2 lg:grid-cols-4  gap-1 mx-5">

                    <div>
                        <div className='px-3 transition-transform duration-500 transform ease-in-out hover:scale-105'>
                            <img className=" rounded-sm h-72 " src={photo} alt="" />
                        </div>
                        <div className='mx-4 my-3' >
                            <h1 className='text-start text-2xl font-bold '>Service 4</h1>
                            <p className="text-justify text-base ">A short description of the service and how the visitor will benefit from it.</p>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 transition-transform duration-500 transform ease-in-out hover:scale-105'>
                            <img className=" rounded-sm h-72" src={photo} alt="" />
                        </div>
                        <div className='mx-4 my-3' >
                            <h1 className='text-start text-2xl font-bold '>Service 4</h1>
                            <p className="text-justify text-base ">A short description of the service and how the visitor will benefit from it.</p>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 transition-transform duration-500 transform ease-in-out hover:scale-105'>
                            <img className=" rounded-sm h-72" src={photo} alt="" />
                        </div>
                        <div className='mx-4 my-3' >
                            <h1 className='text-start text-2xl font-bold '>Service 4</h1>
                            <p className="text-justify text-base ">A short description of the service and how the visitor will benefit from it.</p>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 transition-transform duration-500 transform ease-in-out hover:scale-105'>
                            <img className=" rounded-sm h-72 " src={photo} alt="" />
                        </div>
                        <div className='mx-4 my-3' >
                            <h1 className='text-start text-2xl font-bold '>Service 4</h1>
                            <p className="text-justify text-base ">A short description of the service and how the visitor will benefit from it.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-36'>
                <h1 className='text-center font-bold text-4xl mb-12 md:text-7xl'>Why Choose Us</h1>

                <div className=" grid md:grid-cols-2 lg:grid-cols-4  gap-1 mx-5">

                    <div className='mx-4 my-3' >
                        <h1 className='text-center text-2xl font-bold '>Benifit 1</h1>
                        <p className="text-center text-base ">A short description of the benefit.</p>
                    </div>

                    <div className='mx-4 my-3' >
                        <h1 className='text-center text-2xl font-bold '>Benifit 2</h1>
                        <p className="text-center text-base ">A short description of the benefit.</p>
                    </div>


                    <div className='mx-4 my-3' >
                        <h1 className='text-center text-2xl font-bold '>Benifit 3</h1>
                        <p className="text-center text-base ">A short description of the benefit.</p>
                    </div>

                    <div className='mx-4 my-3' >
                        <h1 className='text-center text-2xl font-bold '>Benifit 4</h1>
                        <p className="text-center text-base ">A short description of the benefit.</p>
                    </div>

                </div>
            </div>
            <div className='mt-36'>
                <h1 className='text-center font-bold text-3xl mb-6 md:text-7xl'>Client Testimonials</h1>
                <div className=" grid md:grid-cols-2 gap-20 lg:grid-cols-3  lg:gap-36 mx-5">
                    <div className='mx-5 '>
                        <p className="mb-4 text-justify text-base">“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>

                        <div className="flex items-center ">
                            <div className="avatar mr-5">
                                <div className="w-16 rounded-full ">
                                    <img src={photo} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>Client Name</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-5 '>
                        <p className="mb-4 text-justify">“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                        <div className="flex items-center ">
                            <div className="avatar mr-5">
                                <div className="w-16 rounded-full ">
                                    <img src={photo} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>Client Name</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <p className="mb-4 text-justify">“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                        <div className="flex items-center ">
                            <div className="avatar mr-5">
                                <div className="w-16 rounded-full ">
                                    <img src={photo} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>Client Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-36 '>
                <h1 className='text-center font-bold lg:text-6xl  text-3xl '>A Title to Turn the <br /> Visitor Into a Lead</h1>
                <p className="text-center text-base py-6">Use this short paragraph to explain how you will <br /> deliver this benefit to the visitor if they decide to <br /> work with you.</p>
                <div className='flex justify-center '>
                    <button className="mt-6 btn px-12 border-white hover:border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 text-white  rounded-full">Learn More</button>

                </div>
            </div>
            <div className=' lg:flex  mt-20 items-center justify-between py-3'>
                <div className='mx-5'>
                    <img src={photo} className="h-64 w-96" alt="" />
                </div>
                <div className='flex lg:flex-row flex-col mt-5 mb-0 items-center'>
                    <p className=''>123-456-7890 | 123 Main Street,New York, NY 1001| </p>
                    <p> Mon-Fri 9:00AM - 5:00PM</p>
                </div>
                <div className='flex justify-center '>
                    <button className='text-xl mr-5 '> <FaFacebookF className='text-blue-500 '></FaFacebookF> </button>
                    <button className='text-xl mx-5 '>  <FaTwitter className='text-blue-500 '></FaTwitter>  </button>
                </div>
            </div>
        </div>

    );
};

export default About;