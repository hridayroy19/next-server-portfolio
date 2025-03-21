import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const BlogSchema = new Schema<TBlog>(
    {
        name: {
            type: String,
            required: true,
        },
        publishedDate: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        practicality: {
            type: String,
            required: true,
        },
        accuracy: {
            type: String,
            required: true,
        },
        reliability: {
            type: String,
            required: true,
        },
        optimization: {
            type: String,
            required: true,
        },
        scalable: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Bloge = model<TBlog>('blog', BlogSchema);
