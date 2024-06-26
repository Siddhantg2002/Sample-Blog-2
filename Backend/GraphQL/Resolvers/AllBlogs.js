import prisma from "../../prisma/prisma.js";

const AllBlogsResolvers = {
  Query: {
    get_all_ALL_blogs: async () => {
      return prisma.allBlogs.findMany();
    },
    get_paginated_ALL_blog: async (_, { page, limit }) => {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const blogs = await prisma.allBlogs.findMany();

      const results = {
        total: page * limit,
        Current_limt: limit,
        current_Page: page,
        next_Page: page + 1,
        previous_Page: page - 1,
        results: blogs.slice(startIndex, endIndex),
      };

      return results;
    },
    get_one_ALL_blog: async (_, { id }) => {
      return prisma.allBlogs.findUnique({
        where: { id },
      });
    },
  },

};

export default AllBlogsResolvers;
