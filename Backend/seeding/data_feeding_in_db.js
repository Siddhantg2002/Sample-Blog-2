import Latest_Blogs_data_feeding from "./Latest_Blogs_data_feeding.js";
import All_blogs_data_feeding from "./All_Blogs_data_feeding.js";

const data_feeding_in_db = async () => {
  try {
    await Latest_Blogs_data_feeding();
  } catch (error) {
    console.error("Latest Blogs data feeding failed");
  }
  try {
      All_blogs_data_feeding()
  } catch (error) {
      console.error("All Blogs data feeding failed");
  }
};

export default data_feeding_in_db;
