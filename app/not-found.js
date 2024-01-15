import React from 'react';
import Image from 'next/image';
import banner from '/public/404.jpg';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src={banner} alt="Page not found" />
      <Link
        href="/"
        className="text-xl text-white font-semibold mt-5 px-10 py-4 bg-primary rounded"
      >
        Goto Home
      </Link>
    </div>
  );
}
