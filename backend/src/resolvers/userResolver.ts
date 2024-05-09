//import { User } from "../interfaces/User";
import userModel from '../models/userModel'

export default {
  Query: {
    users: async () => {
      return await userModel.find()
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    userById: async (_parent: undefined, args: any) => {
      return await userModel.findById(args.id)
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
