import { TBlog } from "./blog.interface";
import { Bloge } from "./blog.model";

const createBlogeIntoDb = async (bloge: TBlog) => {
    const result = await Bloge.create(bloge);
    // console.log(result,"service");
    return result;
};

const getBloge = async () => {
    const result = await Bloge.find();
    return result;
};

//deleted data in database
const getIdBlog = async (productId: string) => {
    const rsult = await Bloge.findById(productId);
    return rsult;
};
// const deleteBlogeDB = async (id: string) => {
//     const rsult = await Bloge.findByIdAndDelete(id);
//     return rsult;
// };


export const BlogService = {
    createBlogeIntoDb,
    getBloge,
    getIdBlog ,
    // deleteBlogeDB
};
