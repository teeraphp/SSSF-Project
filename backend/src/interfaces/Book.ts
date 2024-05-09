import mongoose, { Document } from 'mongoose'

interface Book extends Document {
  name: String
  slug: String
  image: String
  brand: String
  category: String
  description: String
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

export default Book
