import React from 'react';
import Link from "next/link";
import moment from "moment";

const PostCard = ({post}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-0 lg:p-8 pb-12 mb-8">
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-700 text-3xl font-bold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4  lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className="rounded-full align-middle"
          />
          <p className="inline align-middle text-grey-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <p className="text-gray-700 text-center font-normal px-4 text-lg lg:px-20 mb-8">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className='transiton duration-500 transform hover:-translate-y-1 inline-block bg-indigo-800 text-lg rounded-full font-medium text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;