import mongoose, { Document } from 'mongoose'
interface User extends Document {
  name: String
  email: String
  password: String
}

export default User
