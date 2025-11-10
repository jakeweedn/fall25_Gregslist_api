import { Schema } from "mongoose";


export const HouseSchema = new Schema(

    {
        bedrooms: { type: Number, min: 0, max: 30, required: true },
        bathrooms: { type: Number, min: 0, max: 25, required: true },
        levels: { type: Number, min: 1, max: 4, required: true },
        price: { type: Number, min: 0, max: 10000000, required: true },
        imgUrl: { type: String, default: 'https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg' },

        description: { type: String, maxLength: 500, default: 'no description' },
        year: { type: Number, min: 1700, max: 2026, default: 2025, required: true },
        creatorId: { type: Schema.ObjectId, required: true }




    },

    { timeStamps: true, toJSON: { virtuals: true } })

HouseSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true


}
)