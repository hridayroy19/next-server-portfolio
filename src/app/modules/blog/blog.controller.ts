import { Request, Response } from 'express';
import { BlogService } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const rsult = await BlogService.createBlogeIntoDb(req.body);
    res.status(200).json({
      success: true,
      message: 'Projcet crated succesfully',
      data: rsult,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};


const allBloge = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.getBloge();
    res.status(200).json({
      success: true,
      message: 'Projcet succesfully deleted',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

const getIdbyBlog = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await BlogService.getIdBlog(productId);
    res.status(200).json({
      success: true,
      message: 'Blog succesfully get ',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

// const delteBlog = async (req: Request, res: Response) => {
//   try {
//     const { productId } = req.params;
//     const result = await BlogService.deleteBlogeDB(productId);
//     res.status(200).json({
//       success: true,
//       message: 'Projcet succesfully deleted',
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: true,
//       message: 'somthing went wrong',
//       error,
//     });
//   }
// };



export const BlogControllerr = {
  createBlog,
  allBloge,
  getIdbyBlog,
  // delteBlog
};
