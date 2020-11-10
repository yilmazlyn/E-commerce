import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqired: true,
    },

    email: {
      type: String,
      reqired: true,
      unique: true,
    },
    password: {
      type: String,
      reqired: true,
    },

    isAdmin: {
      type: Boolean,
      reqired: true,
      default: false,
    },

    //Created at//Updated at timestamps adding for all fields
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
