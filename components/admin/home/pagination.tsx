import Link from 'next/link';
import React from 'react';

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example" className="flex items-center justify-center w-full">
            <ul className="flex items-center -space-x-px h-10 text-sm">
                <li>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" />
                        </svg>
                    </Link>
                </li>
                <li>
                <Link href="#" className="flex items-center justify-center px-4 h-full leading-tight text-gray-500 bg-white border border-gray-300 rounded-tl-lg rounded-bl-lg hover:bg-gray-100 hover:text-gray-700 ">1</Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</Link>
                </li>
                <li>
                    <Link href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;