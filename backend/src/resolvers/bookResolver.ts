import ProductModel from '../models/productModel'
import Book from '../interfaces/Book'

export default {
  Query: {
    books: async () => {
      return await ProductModel.find()
    },
    /*
    bookBySlug: async (parent: any, { id }: any, { models }: any) => {
      return await models.Book.findById(id)
    },*/
    bookById: async (_parent: undefined, args: any) => {
      return await ProductModel.findById(args.id)
    },
  },

  Mutation: {
    createBook: async (_parent: undefined, args: Book) => {
      const newBook = new ProductModel(args)
      return await newBook.save()
    },
    updateBook: async (_parent: undefined, args: Book) => {
      return await ProductModel.findByIdAndUpdate(args.id, args, { new: true })
    },
    deleteBook: async (_parent: undefined, args: Book) => {
      return await ProductModel.findByIdAndDelete(args.id)
    },
  },
}
