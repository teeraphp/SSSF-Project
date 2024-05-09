export default {
  Query: {
    books: async (parent: any, args: any, { models }: any) => {
      return await models.Book.find()
    },
    book: async (parent: any, { id }: any, { models }: any) => {
      return await models.Book.findById(id)
    },
  },
}
