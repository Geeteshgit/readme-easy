import React from 'react';
import Link from 'next/link';
import { TbFaceIdError } from 'react-icons/tb';

const NotFound = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-12 lg:px-24 py-10 gap-6 text-center">
      <span className="text-7xl text-blue-600">
        <TbFaceIdError className='animate-pulse' />
      </span>
      <h1 className="text-3xl sm:text-5xl font-bold">404 - Page Not Found</h1>
      <p className="text-base sm:text-lg opacity-75">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white rounded-xl text-sm sm:text-base font-semibold hover:scale-[1.02] transition-all mt-4 px-6 py-3"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
