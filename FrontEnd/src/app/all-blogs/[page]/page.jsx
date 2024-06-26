import AllBlogs from "@/components/AllBlogs/AllBlogs";

const Page = ({ params }) => {
  return (
    <>
      <AllBlogs params={params.page}/>
    </>
  );
};

export default Page;
