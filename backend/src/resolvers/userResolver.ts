export default {
  Query: {
    user: async (parent: any, args: any, { models }: any) => {
      return await models.User.find()
    },
    userById: async (parent: any, { id }: any, { models }: any) => {
      return await models.User.findById(id)
    },
  },
  Mutation: {
    createUser: async (parent: any, { name, email }: any, { models }: any) => {
      const user = new models.User({
        name,
        email,
      })
      await user.save()
      return user
    },
    updateUser: async (
      parent: any,
      { id, name, email }: any,
      { models }: any
    ) => {
      return await models.User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      )
    },
    deleteUser: async (parent: any, { id }: any, { models }: any) => {
      return await models.User.findByIdAndDelete(id)
    },
  },
}
