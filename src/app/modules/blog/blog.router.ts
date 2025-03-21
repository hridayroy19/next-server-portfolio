import express from 'express';
import { BlogControllerr } from './blog.controller';

const router = express.Router();

router.post('/create-blog', BlogControllerr.createBlog);
router.get('/all', BlogControllerr.allBloge);
router.get('/:productId', BlogControllerr.getIdbyBlog);

export const BlogeRouter = router;
