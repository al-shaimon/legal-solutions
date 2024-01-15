import React from 'react';
import Link from 'next/link';
import { eb_garamond } from '@/app/fonts';
import logo from '/public/nav-logo.jpg';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div>
      {/* <div className="flex justify-between items-center">
        <div className={eb_garamond.className}>
          <Link className="flex gap-4" href="/">
            <Image src={logo} alt="navbar logo" />
            <h2 className="text-4xl text-[#414040] font-extrabold">Justice</h2>
          </Link>
        </div>
        <div className="md:flex flex-col gap-5 hidden  text-secondary md:flex-row md:gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Cases</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div>
          <Link
            className="md:px-7 md:py-5 bg-primary text-white text-lg font-medium rounded-lg"
            href="/"
          >
            Free Consultation
          </Link>
        </div>
      </div> */}
      
    </div>
  );
}
