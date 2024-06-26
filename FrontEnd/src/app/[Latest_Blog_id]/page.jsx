import LatestBlogContent from "@/components/LatestBlogContent/LatestBlogContent";

const Page = ({ params }) => {
  return <LatestBlogContent params={params.Latest_Blog_id} />;
};

export default Page