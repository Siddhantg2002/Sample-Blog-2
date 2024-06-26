import prisma from "../../prisma/prisma.js";

const LatestBlogsResolvers = {
  Query: {
    get_all_latest_blogs: async () => {
      return prisma.latestBlogs.findMany();
    },
    get_one_latest_blog: async(_, {id}) => {
      return prisma.latestBlogs.findUnique({
        where: {id}
      })
    }
  },
  
}

export default LatestBlogsResolvers;
