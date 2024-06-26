import saveDataSync from "../database/data_saving.js";
import prisma from "../prisma/prisma.js";
import optimization_for_feeding_data from "./optimization_for_feeding_data.js";

const fileData = saveDataSync()

async function All_Blogs_feeding() {
  const blogsData = [
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "1.jpg",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "2.jpeg",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "3.webp",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "4.jpeg",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "5.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "6.jpeg",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "7.jpeg",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "8.webp",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "9.webp",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "10.webp",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "11.webp",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "12.webp",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "13.jpeg",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "14.jpeg",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "15.webp",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "16.jpeg",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "17.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "18.webp",
    },
    { 
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "19.jpeg",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "20.jpeg",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "21.jpeg",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "22.webp",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "23.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "24.jpeg",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "25.webp",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "26.webp",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "27.jpeg",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "28.webp",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "29.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "30.jpeg",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "31.webp",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "32.webp",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "33.webp",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "34.webp",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "35.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "36.jpeg",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "37.webp",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "38.jpeg",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "39.jpeg",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "40.jpeg",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "41.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "42.jpeg",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "43.webp",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "44.jpeg",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "45.webp",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "46.webp",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "47.jpeg",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "48.jpeg",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "49.jpeg",
    },
    {
      title: "Implement Dark Mode in Your Android App",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "50.webp",
    },
    {
      title: "Why is Mental Health one of the Important Issues to Address?",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "51.jpeg",
    },
    {
      title: "Pattern Matching In Elixir",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "52.webp",
    },
    {
      title: "3 things you should change during your focus group interview",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "53.webp",
    },
    {
      title: "Using Webpack with React Typescript",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "54.webp",
    },
    {
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "55.webp",
    },
  
  ];
  
optimization_for_feeding_data(blogsData,'allBlogsHash', prisma.allBlogs, 'All Blogs' )
  
}

export default All_Blogs_feeding;