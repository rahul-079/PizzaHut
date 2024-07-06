import React from "react";

export default function Footer() {
    return (
        <>
            <footer className='bg-[#1D2228]'>
                <div className="container mx-auto p-2">
                    <div className="title my-6 text-center sm:text-left">
                        <span className='p-2 text-3xl text-white font-bold'>PizzaHut</span>
                    </div>
                    <div className="menu space-y-6 sm:flex sm:justify-between items-center">
                        <ul className='text-white text-center sm:mx-12'>
                            <li className='font-bold text-white text-xl'>Information</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="mailto:rahul.chandu321@gmail.com">Contact Us</a></li>
                        </ul>
                        <ul className='text-white text-center sm:mx-12'>
                            <li className='font-bold text-white text-xl'>Top Items</li>
                            <li><a href="#">Coca Cola</a></li>
                            <li><a href="#">Pepsi</a></li>
                            <li><a href="#">Veg Pizza</a></li>
                            <li><a href="#">Mango Juice</a></li>
                        </ul>
                        <ul className='text-white text-center sm:mx-12'>
                            <li className='font-bold text-white text-xl'>Others</li>
                            <li><a href="#">Info</a></li>
                            <li><a href="#">Site</a></li>
                            <li><a href="#">Review</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                        <ul className='text-white text-center sm:mx-12'>
                            <li className='font-bold text-white text-xl'>Follow Us</li>
                            <li><a href="#" className="flex items-center"><i className='fab fa-facebook-f mr-2'></i> Facebook</a></li>
                            <li><a href="#" className="flex items-center"><i className='fab fa-twitter mr-2'></i> Twitter</a></li>
                            <li><a href="https://www.instagram.com/rahul__ix/" className="flex items-center"><i className='fab fa-instagram mr-2'></i> Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/rahul-pamu-b7a3b0248/" className="flex items-center"><i className='fab fa-linkedin-in mr-2'></i> LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="copyright text-white flex justify-between items-center my-6">
                        <p>Copyright &copy; 2024 <a href="#">P.Rahul . All Rights Reserved</a></p>
                        <a className='p-2 bg-red-500 rounded-xl' href="#"><i className='fa fa-chevron-up'></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
