"use client";

import { useQuery } from "@apollo/client";
import GET_ONE_LATEST_BLOGS_CONTENT from "./query";
import PrevCustomButton from "../utils/Buttons/PrevButton"

const LatestBlogContent = ({ params }) => {
  const { loading, error, data } = useQuery(GET_ONE_LATEST_BLOGS_CONTENT, {
    variables: { id: params },
  });
  const blog = data?.get_one_latest_blog || {}
  return (
    <>
      {loading ? (
        <div className="flex justify-center h-svh">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : error ? (
        <div className="flex justify-center h-svh">
          <h1>Error: {error.message}</h1>
        </div>
      ) : (
        blog && (
          <>
            <article itemID="#" itemScope itemType="http://schema.org/BlogPosting">
              <div className="grid items-center grid-cols-1 md:grid-cols-2">
                <div className="order-2 h-64 md:order-1 md:h-full">
                  <img
                    src={`/home/${blog.image}`}
                    className="object-cover w-full h-full bg-center"
                    alt="img"
                  />
                </div>
                <div className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
                  <p className="mb-3 text-gray-500">
                    <time
                      itemProp="datePublished dateModified"
                      dateTime="2010-08-07 11:11:03-0400"
                    >
                      Jan 02 2021
                    </time>
                  </p>
                  <h1
                    className="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
                    itemProp="headline"
                  >
                    {blog.title}
                  </h1>
                  <div className="flex items-center text-gray-700" >
                    <div className="ml-2">
                      <p className="text-sm font-semibold text-gray-800">
                        Praveen Juge
                      </p>
                      <p className="text-sm text-gray-500">Swell Guy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center px-40 py-20 mx-auto prose">
                <p>{blog.body}</p>
              </div>
            </article>
            <div className="flex justify-center">
              <PrevCustomButton
                variant="secondary"
                kind="elevated"
                size="small"
                colorMode="dark"
                text="Go Back"
              />
            </div>
          </>
        )
      )}
    </>
  );
};

export default LatestBlogContent;
