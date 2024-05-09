import {
  modelOptions,
  prop,
  getModelForClass,
  mongoose,
} from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  public _id?: string
  @prop({ required: true })
  public name!: string
  @prop({ required: true, unique: true })
  public email!: string
  @prop({ required: true })
  public password!: string
  @prop({ required: true, default: false })
  public isAdmin!: boolean
}
/*
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)*/

export const UserModel = getModelForClass(User)
/*const User = mongoose.model('User', userSchema)
 */
export default UserModel
