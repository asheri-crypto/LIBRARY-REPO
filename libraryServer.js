import http from 'node:http'
import { getBooksFromDB } from './bookDB.js'

const PORT = 6000

const server = http.createServer(async (req, res) => {
  // Always set JSON header
  res.setHeader('Content-Type', 'application/json')
  
  try {
    // TODO: Add your routes here!
    
    // Example structure:
    if (req.url === '/api/books' && req.method === 'GET') {
      const books = await getBooksFromDB()
      res.statusCode = 200
      res.end(JSON.stringify(books))
      
    } else if (req.method === 'GET' && req.url.startsWith('/api/books/genre/')) {
      // TODO: Get genre from URL and filter books
      const genre = req.url.split('/').pop() // Get the genre from the URL
        const books = await getBooksFromDB()
      const filteredBooks = books.filter(
        book => book.genre.toLowerCase() === genre.toLowerCase()
      )
      res.statusCode = 200
      res.end(JSON.stringify(filteredBooks))
      
      
    } else if (req.method === 'GET' && req.url.startsWith('/api/books/author/')) {
      // TODO: Get author from URL and filter books
      const author = req.url.split('/').pop() // Get the author from the URL
         const books = await getBooksFromDB()
          const filteredBooks = books.filter(
            book => book.author.toLowerCase() === author.toLowerCase()
          )
          res.statusCode = 200
          res.end(JSON.stringify(filteredBooks))
      
    } else if (req.url === '/api/books/available' && req.method === 'GET') {
      // TODO: Return only available books
      const books = await getBooksFromDB()
      const availableBooks = books.filter(book => book.available)
      res.statusCode = 200
      res.end(JSON.stringify(availableBooks))
      
    } else {
      // 404 for all other routes
      res.statusCode = 404
      res.end(JSON.stringify({
        error: "not found",
        message: "Route not found. Available routes: /api/books, /api/books/genre/:genre, /api/books/author/:author, /api/books/available"
      }))
    }
    
  } catch (error) {
    res.statusCode = 500
    res.end(JSON.stringify({
      error: "server error",
      message: "Something went wrong"
    }))
  }
})

server.listen(PORT, () => {
  console.log(`Library API running on http://localhost:${PORT}`)
  console.log("Try these endpoints:")
  console.log("1. GET /api/books")
  console.log("2. GET /api/books/genre/fantasy")
  console.log("3. GET /api/books/author/Stephen King")
  console.log("4. GET /api/books/available")
})