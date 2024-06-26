import AllBlogContent from "@/components/AllBlogsContent/AlBlogsContent"

const page = ({params}) => {
  return (
    <AllBlogContent params={params.all_blogs_id}/>
  )
}

export default page