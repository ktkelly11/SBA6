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

const dogs = [
  {
    name: "Blue",
    dogBreed: "Corgi",
    age: 7,
    gender: "M",
    color: "tan",
    vacinated: true,
    referenceNum: "9983166917",
  },
  {
    name: "Casey",
    dogBreed: "Beagle",
    age: 4,
    gender: "F",
    color: "tricolor",
    vacinated: true,
    referenceNum: "1384209891",
  },
  {
    name: "Finn",
    dogBreed: "Bluetick Coonhound",
    age: 7,
    gender: "M",
    color: "tricolor",
    vacinated: true,
    referenceNum: "8611160436",
  },
  {
    name: "Ginger",
    dogBreed: "Australian Shepherd",
    age: 4,
    gender: "M",
    color: "tricolor",
    vacinated: true,
    referenceNum: "6403093665",
  },
  {
    name: "Kennedy",
    dogBreed: "Cavalier King Charles Spaniel",
    age: 3,
    gender: "F",
    color: "black and white",
    vacinated: true,
    referenceNum: "7452122410",
  },
  {
    name: "Lenny",
    dogBreed: "Doberman",
    age: 2,
    gender: "F",
    color: "black and brown",
    vacinated: true,
    referenceNum: "1528866312",
  },
  {
    name: "Marv",
    dogBreed: "Irish Setter",
    age: 2,
    gender: "M",
    color: "brown",
    vacinated: true,
    referenceNum: "1921704411",
  },
  {
    name: "Piper",
    dogBreed: "Beagle",
    age: 6,
    gender: "F",
    color: "tricolor",
    vacinated: true,
    referenceNum: "9524560283",
  },
  {
    name: "Remmy",
    dogBreed: "American Staffordshire Terrier",
    age: 7,
    gender: "M",
    color: "grey",
    vacinated: true,
    referenceNum: "7938379999",
  },
  {
    name: "Skye",
    dogBreed: "Black Labrador",
    age: 3,
    gender: "F",
    color: "black",
    vacinated: false,
    referenceNum: "1130364755",
  },
];

const cats = [
  {
    name: "Abbey",
    catBreed: "Siamese",
    age: 2,
    gender: "F",
    color: "brown and tan",
    vacinated: true,
    referenceNum: "2767774975",
  },
  {
    name: "Ash",
    catBreed: "British Shorthair",
    age: 9,
    gender: "F",
    color: "grey",
    vacinated: true,
    referenceNum: "5452979263",
  },
  {
    name: "Bee",
    catBreed: "Scottish Fold",
    age: 7,
    gender: "M",
    color: "grey",
    vacinated: true,
    referenceNum: "3424710156",
  },
  {
    name: "Cali",
    catBreed: "Main Coon",
    age: 5,
    gender: "M",
    color: "brindle",
    vacinated: true,
    referenceNum: "3023694052",
  },
  {
    name: "Cosmos",
    catBreed: "Bombay",
    age: 4,
    gender: "F",
    color: "black",
    vacinated: true,
    referenceNum: "0782600921",
  },
  {
    name: "Dove",
    catBreed: "Munchkin",
    age: 8,
    gender: "M",
    color: "white",
    vacinated: true,
    referenceNum: "7397677177",
  },
  {
    name: "Flynn",
    catBreed: "Tabby",
    age: 2,
    gender: "M",
    color: "orange",
    vacinated: true,
    referenceNum: "9857878709",
  },
  {
    name: "Ivy",
    catBreed: "Ragdoll",
    age: 1,
    gender: "M",
    color: "white",
    vacinated: true,
    referenceNum: "9415798319",
  },
  {
    name: "Misty",
    catBreed: "Exotic Shorthair",
    age: 11,
    gender: "M",
    color: "orange",
    vacinated: true,
    referenceNum: "7852398154",
  },
  {
    name: "Sage",
    catBreed: "Norweigan Forest",
    age: 6,
    gender: "F",
    color: "white and brown",
    vacinated: true,
    referenceNum: "8666839759",
  },
];

async function seed() {
  try {
    await Adopter.deleteMany({});
    await Dog.deleteMany({});
    await Cat.deleteMany({});

    const createdAdopters = await Adopter.create(adopters);

    console.log("Adopters: ", createdAdopters);

    const createdDogs = await Dog.create(dogs);

    console.log("Dogs: ", createdDogs);

    const createdCats = await Cat.create(cats);

    console.log("Cats: ", createdCats);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();
