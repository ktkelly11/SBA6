// Require connection file to connect
const mongoose = require("./db-connection.js");
// Require Models for delete and create operations
const Adopter = require("../models/Adopter.js");
const Dog = require("../models/Dog.js");
const Cat = require("../models/Cat.js");

///////////////////////////
// CHANGE THIS SAMPLE DATA TO THE DATA YOU'RE WORKING WITH!!!
///////////////////////////
const adopters = [
  {
    email: "john@doe.com",
    password: "123456",
    age: 40,
    isCool: true,
  },
  {
    email: "boba@fett.com",
    password: "jetpackdude",
    age: 35,
    isCool: true,
  },
  {
    email: "darth@vader.com",
    password: "iamyourfather",
    age: 60,
    isCool: false,
  },
];

const posts = [
  {
    title: "Star Wars",
    content: "its really cool",
    author: "Josh",
  },
  {
    title: "MongoDB",
    content: "its a database",
    author: "Per Scholas",
  },
  {
    title: "Dogs are Cool",
    content: "Do i really need to explain??",
    author: "Doglover123",
    comments: [
      {
        content: "you so right",
        author: "dogsdogsdogs",
      },
      {
        content: "true true",
        author: "albert",
      },
    ],
  },
];

async function seed() {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    const createdPosts = await Post.create(posts);

    console.log("Posts: ", createdPosts);

    const createdUsers = await User.create(users);

    console.log("Users: ", createdUsers);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();
