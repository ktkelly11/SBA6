// Require connection file to connect
const mongoose = require("./db-connection.js");
// Require Models for delete and create operations
const Adopter = require("../models/Adopter.js");
const Dog = require("../models/Dog.js");
const Cat = require("../models/Cat.js");

const adopters = [
  {
    fullName: "Willie Duffil",
    email: "wduffil0@netlog.com",
    phoneNum: "269-656-8329",
    address: "1 Duke Crossing",
    age: 25,
  },
  {
    fullName: "Silvana Lockey",
    email: "slockey1@vistaprint.com",
    phoneNum: "211-547-7236",
    address: "45 Scoville Plaza",
    age: 34,
    otherPets: [
      {
        petName: "Fluffy",
        petType: "Dachshund",
        color: "brown",
        age: 4,
      },
    ],
  },
  {
    fullName: "Lowell Porte",
    email: "lporte2@liveinternet.ru",
    phoneNum: "385-105-7293",
    address: "325 Ronald Regan Court",
    age: 59,
    otherPets: [
      {
        petName: "Bailey",
        petType: "Golden Retriever",
        color: "brown",
        age: 12,
      },
    ],
  },
  {
    fullName: "Levin McAllen",
    email: "lmcallen3@tmall.com",
    phoneNum: "714-756-9287",
    address: "87743 Karstens Trail",
    age: 43,
    otherPets: [
      {
        petName: "Hunter",
        petType: "Coonhound",
        color: "brown, black and white",
        age: 9,
      },
    ],
  },
  {
    fullName: "Amory Matejovsky",
    email: "amatejovsky4@latimes.com",
    phoneNum: "281-806-2969",
    address: "8 Nova Trail",
    age: 55,
  },
  {
    fullName: "Kimball McLeoid",
    email: "kmcleoid5@nsw.gov.au",
    phoneNum: "793-721-8803",
    address: "42207 Eagle Crest Center",
    age: 30,
  },
  {
    fullName: "Cleo Tattoo",
    email: "ctattoo6@bing.com",
    phoneNum: "443-524-4011",
    address: "6448 Mayer Place",
    age: 27,
    otherPets: [
      {
        petName: "Shiloh",
        petType: "Border Collie",
        color: "black and white",
        age: 10,
      },
    ],
  },
  {
    fullName: "Robby Upton",
    email: "rupton7@wikipedia.org",
    phoneNum: "942-257-4648",
    address: "662 Lerdahl Crossing",
    age: 48,
  },
  {
    fullName: "Maribeth Haughin",
    email: "mhaughin8@1und1.de",
    phoneNum: "583-189-1461",
    address: "114 Becker Park",
    age: 39,
    otherPets: [
      {
        petName: "Harley",
        petType: "Basset Hound",
        color: "brown, black, and white",
        age: 7,
      },
    ],
  },
  {
    fullName: "Greggory Glossup",
    email: "gglossup9@ox.ac.uk",
    phoneNum: "353-307-7680",
    address: "83921 Truax Street",
    age: 72,
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
