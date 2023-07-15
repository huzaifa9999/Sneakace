const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: Buffer, required: true },
  role: { type: String, required: true, default: 'user' },
  address: { type: String },
  zipcode: { type: String },
  state: { type: String },
  city: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  salt: Buffer,
  resetPasswordToken: { type: String, default: '' }
}, { timestamps: true });

const virtual = userSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.User = mongoose.model('User', userSchema);