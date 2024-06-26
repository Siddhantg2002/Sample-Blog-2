"use client";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import GET_LATEST_BLOGS from "./query"

const Cards = () => {
  const { loading, error, data } = useQuery(GET_LATEST_BLOGS);

  return (
    <>
      <div className="flex p-5 justify-center">
        <h1 className="text-3xl font-bold text-center">Latest Stories</h1>
      </div>
      <div className="flex justify-center mx-auto md:flex-nowrap p-12">
        {error ? (
            <p>{error.message}</p>
        ) : loading ? (
          <div className="w-full max-w-md mx-auto animate-pulse p-9">
            <h1 className="h-2 bg-gray-300 rounded-lg w-52 "></h1>
            <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
            <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
            <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg"></p>
          </div>
        ) : (
          data.get_all_latest_blogs.map((blog: any, index: number) => (
            <Link href={`/${blog.id}`} key={index}>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img
                    className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src={`/home/${blog.image}`}
                    alt="blog"
                  />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      {blog.title}
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
