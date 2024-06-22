"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from "react-icons/fa";
import { useState } from 'react';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSuccessful = message.includes('Thanks for subscribing');

  
  const messageClass = isSuccessful
    ? 'text-green-500 font-bold text-center pt-2 text-lg px-3'
    : 'text-red-600 font-semibold text-center pt-2 text-lg px-3';

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setMessage('Thanks for subscribing');
      setEmail(''); 
    } else {
      setMessage('Invalid email');
    }
  };

  return (
    <footer className=" text-white bg-[#140b1f] border-[1px] border-[#140b1f]">
      
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-base">Email: otuaghagrace@gmail.com</p>
            <p className="text-base">Phone: 08160006700</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2 font-bold text-2xl">
              <Link href="/"><FiTwitter className='hover:scale-105 hover:transition cursor-pointer hover:text-purple-500' /></Link>
              <Link href="/"><FaTiktok className='hover:scale-105 hover:transition cursor-pointer hover:text-purple-500' /></Link>
              <Link href="/"><FiInstagram className='hover:scale-105 hover:transition cursor-pointer hover:text-purple-500' /></Link>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className='hover:scale-105 hover:transition cursor-pointer hover:text-purple-500 hover:underline'><Link href="/">HOME</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-purple-500 hover:underline' ><Link  href="/quiz">QUIZ</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-purple-500 hover:underline'><Link href="/contact">CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#221235] hover:bg-slate-200 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Niggiquiz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
