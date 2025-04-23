const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  totalPoints: { type: Number, default: 0 },
  data: [
    {
      name: { type: String },
      icon: { type: String },
      description: { type: String },
      TotalCount: { type: Number, default: 0 },
      TotalPoints: { type: Number, default: 0 },
    },
  ],
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
