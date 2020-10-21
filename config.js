require("dotenv").config();

module.exports = {
  MONGODB: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.nkx5r.mongodb.net/merng?retryWrites=true&w=majority`,
  SECRET_KEY: "some secret keyas",
};
