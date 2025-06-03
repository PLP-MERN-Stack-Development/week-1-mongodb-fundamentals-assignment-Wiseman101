// test> show dbs
// admin      40.00 KiB
// config     48.00 KiB
// local      72.00 KiB
// plp_store  40.00 KiB
// test> use plp_store
// switched to db plp_store
// plp_store> show collections
books
plp_store> db.books.find().pretty()
[
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0b'),
    title: 'To Kill a mockingbird',
    author: 'Jules',
    genre: 'fiction',
    published_year: 2022,
    price: 500,
    in_store: true,
    pages: 112,
    publisher: 'Longman'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0c'),
    title: 'Literature',
    author: 'Ngugi',
    genre: 'fiction',
    published_year: 2020,
    price: 400,
    in_store: true,
    pages: 98,
    publisher: 'JKF'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0d'),
    title: 'The Great Gatsby',
    author: 'Scot',
    genre: 'Classic',
    published_year: 2024,
    price: 1000,
    in_store: false,
    pages: 149,
    publisher: 'Tom & Jerry'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0e'),
    title: 'The Cather in Rye',
    author: 'James Bond',
    genre: 'Classic',
    published_year: 2020,
    price: 1200,
    in_store: true,
    pages: 150,
    publisher: 'Firehouse Production'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0f'),
    title: 'Atomic Habits',
    author: 'Thomas',
    genre: 'Fable',
    published_year: 2025,
    price: 800,
    in_store: true,
    pages: 200,
    publisher: 'Celedon books'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd10'),
    title: 'Wise brains',
    author: 'Dr. Wise',
    genre: 'Classic',
    published_year: 2010,
    price: 1000,
    in_store: true,
    pages: 88,
    publisher: 'Jet brains'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd11'),
    title: 'The Hobit',
    author: 'Jules',
    genre: 'Classic',
    published_year: 2016,
    price: 250,
    in_store: true,
    pages: 100,
    publisher: 'Longman'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd12'),
    title: 'My life in crime',
    author: 'John Kiriamiti',
    genre: 'Fiction',
    published_year: 2017,
    price: 300,
    in_store: true,
    pages: 133,
    publisher: 'Jet brains'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd13'),
    title: 'Skater',
    author: 'Skate Freezer',
    genre: 'Classic',
    published_year: 2020,
    price: 500,
    in_store: true,
    pages: 453,
    publisher: 'Dr. Jules Publishers'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd14'),
    title: 'Nuclear Bombs',
    author: 'Jules',
    genre: 'Tales',
    published_year: 2021,
    price: 1000,
    in_store: true,
    pages: 234,
    publisher: 'Hillary publication'
  }
]
plp_store> db.books.find({genre: "Fiction"})
[
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd12'),
    title: 'My life in crime',
    author: 'John Kiriamiti',
    genre: 'Fiction',
    published_year: 2017,
    price: 300,
    in_store: true,
    pages: 133,
    publisher: 'Jet brains'
  }
]
plp_store> db.books.find({price: {$gt: 1000}})
[
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0e'),
    title: 'The Cather in Rye',
    author: 'James Bond',
    genre: 'Classic',
    published_year: 2020,
    price: 1200,
    in_store: true,
    pages: 150,
    publisher: 'Firehouse Production'
  }
]
plp_store> db.books.updateMany({genre: "Classic"},{$set: {genre: "Romance"}})
{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
}
plp_store> db.books.find({genre: "Romance"})
[
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0d'),
    title: 'The Great Gatsby',
    author: 'Scot',
    genre: 'Romance',
    published_year: 2024,
    price: 1000,
    in_store: false,
    pages: 149,
    publisher: 'Tom & Jerry'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0e'),
    title: 'The Cather in Rye',
    author: 'James Bond',
    genre: 'Romance',
    published_year: 2020,
    price: 1200,
    in_store: true,
    pages: 150,
    publisher: 'Firehouse Production'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd10'),
    title: 'Wise brains',
    author: 'Dr. Wise',
    genre: 'Romance',
    published_year: 2010,
    price: 1000,
    in_store: true,
    pages: 88,
    publisher: 'Jet brains'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd11'),
    title: 'The Hobit',
    author: 'Jules',
    genre: 'Romance',
    published_year: 2016,
    price: 250,
    in_store: true,
    pages: 100,
    publisher: 'Longman'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd13'),
    title: 'Skater',
    author: 'Skate Freezer',
    genre: 'Romance',
    published_year: 2020,
    price: 500,
    in_store: true,
    pages: 453,
    publisher: 'Dr. Jules Publishers'
  }
]
plp_store> db.books.deleteMany({genre: "Romance"})
// { acknowledged: true, deletedCount: 5 }
plp_store> db.books.find().pretty()
[
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0b'),
    title: 'To Kill a mockingbird',
    author: 'Jules',
    genre: 'fiction',
    published_year: 2022,
    price: 500,
    in_store: true,
    pages: 112,
    publisher: 'Longman'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0c'),
    title: 'Literature',
    author: 'Ngugi',
    genre: 'fiction',
    published_year: 2020,
    price: 400,
    in_store: true,
    pages: 98,
    publisher: 'JKF'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd0f'),
    title: 'Atomic Habits',
    author: 'Thomas',
    genre: 'Fable',
    published_year: 2025,
    price: 800,
    in_store: true,
    pages: 200,
    publisher: 'Celedon books'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd12'),
    title: 'My life in crime',
    author: 'John Kiriamiti',
    genre: 'Fiction',
    published_year: 2017,
    price: 300,
    in_store: true,
    pages: 133,
    publisher: 'Jet brains'
  },
  {
    _id: ObjectId('683e7a9f09c5be46d8eedd14'),
    title: 'Nuclear Bombs',
    author: 'Jules',
    genre: 'Tales',
    published_year: 2021,
    price: 1000,
    in_store: true,
    pages: 234,
    publisher: 'Hillary publication'
  }
]