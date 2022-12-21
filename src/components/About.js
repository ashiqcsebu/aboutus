import React from 'react';
import photo from '../asset/about.jpg'

const About = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl md:text-3xl'>About Us</h1>
             <div className="mx-8 my-12 ">

                <div className=" flex flex-col lg:flex-row  ">

                    <div className=''>
                        <h1 className=' lg:text-center font-bold lg:text-6xl md:text-center text-3xl my-center'>This Headline Grabs Visitors’ Attention</h1>
                        <p className="lg:text-start lg:text-2xl md:text-xl md:text-center mt-6 ">A short description introducing visitors to your business and the services you offer</p>
                     
                 <button className=" mt-6 btn px-12 border-white hover:border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 text-white  rounded-full">Contact Us</button>
                        
                    </div>
                    <div className=''>
                        <img src={photo} className="rounded-sm min-h-min" alt='' />
                    </div>
                </div>
            </div> 


   


            <div className='mt-7'>
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
                <h1 className='text-center font-bold text-4xl mb-4 md:text-7xl'>Why Choose Us</h1>

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

            <div className='mt-36'>
                <h1 className='text-center font-bold lg:text-6xl  text-3xl '>A Title to Turn the <br /> Visitor Into a Lead</h1>
                <p className="text-center text-base py-6">Use this short paragraph to explain how you will <br /> deliver this benefit to the visitor if they decide to <br /> work with you.</p>
                <button className="place-content-center btn px-12 border-white hover:border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 text-white  rounded-full">Learn More</button>
            </div>









        </div>


    );
};

export default About;