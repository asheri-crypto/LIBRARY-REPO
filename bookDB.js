// bookDB.js - Our "database" of books
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "classic",
    year: 1925,
    available: true
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "classic",
    year: 1960,
    available: true
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "dystopian",
    year: 1949,
    available: false
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    year: 1937,
    available: true
  },
  {
    id: 5,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "fantasy",
    year: 1997,
    available: true
  },
  {
    id: 6,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "mystery",
    year: 2003,
    available: true
  },
  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    genre: "sci-fi",
    year: 1965,
    available: true
  },
  {
    id: 8,
    title: "Neuromancer",
    author: "William Gibson",
    genre: "sci-fi",
    year: 1984,
    available: false
  },
  {
    id: 9,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "classic",
    year: 1813,
    available: true
  },
  {
    id: 10,
    title: "The Shining",
    author: "Stephen King",
    genre: "horror",
    year: 1977,
    available: true
  }
]

// Simulate a slow database call
export async function getBooksFromDB() {
  // Wait 0.5 seconds to simulate real database
  await new Promise(resolve => setTimeout(resolve, 500))
  
  console.log("Database: Returning books data")
  return books
}