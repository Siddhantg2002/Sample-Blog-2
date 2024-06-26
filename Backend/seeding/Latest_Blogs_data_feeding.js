import saveDataSync from "../database/data_saving.js";
import prisma from "../prisma/prisma.js";
import optimization_for_feeding_data from "./optimization_for_feeding_data.js";

const fileData = saveDataSync()

async function Latest_Blogs_feeding() {
  const LatestblogsData = [
    {
      title: 'Learn React',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      body: fileData.file1,
      image: 'hall.jpg',
    },
    {
      title: 'Learn Next.js',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      body: fileData.file2,
      image: 'Luxury.jpg',
    },
    {
      title: 'Learn JavaScript',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      body: fileData.file3,
      image: 'yatch.jpg',
    },
    {
      title: 'Learn TypeScript',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      body: fileData.file4,
      image: 'gold.jpg',
    },
  ];

  await optimization_for_feeding_data(LatestblogsData, 'latestBlogsHash', prisma.latestBlogs, 'Latest Blogs');
}

export default Latest_Blogs_feeding;
