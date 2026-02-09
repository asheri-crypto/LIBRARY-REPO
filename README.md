Library API (Node.js)
This repository contains a simple Node.js project for managing a small library database. It includes one file that represents the book database and another file that provides a server/API to access books and authors.

Project Overview
bookDB.js
Holds the in‑memory library data (books, authors, maybe categories and IDs). It will later be extended to support more operations like adding, updating, or deleting books.

libraryServer.js
A Node.js server (for example using plain HTTP or Express) that imports the database and exposes routes/endpoints to access the data, such as:

listing all books,

viewing a single book,

listing all authors,

filtering books by author.
​

Note: The project is still under development, so the structure and endpoints may change as I keep learning and adding features.

Goals of this project
This project is part of my Node.js learning journey. With it I want to:

Practice splitting code into separate modules (bookDB.js, libraryServer.js).

Learn how to build a simple API to access data from JavaScript code.

Experiment with basic CRUD‑style operations for a library (books and authors).

Get comfortable using Git and GitHub with real Node.js code.

Getting Started
Prerequisites
Node.js installed (LTS version recommended).

Git (to clone or update the repository).
​

Installation
Clone this repository:

bash
git clone https://github.com/asheri-crypto/LIBRARY-REPO.git
cd LIBRARY-REPO
Install dependencies (if libraryServer.js uses any packages like Express, they will be listed in package.json):

bash
npm install
Running the server
Once dependencies are installed, start the server (adjust the command if you use something different):

bash
node libraryServer.js
Then open your browser (or a tool like Postman / curl) and access the routes your server exposes, for example:

http://localhost:3000/books

http://localhost:3000/authors

http://localhost:3000/books/:id

(Ports and paths can be updated here once the routes are finalized.)

Future Plans
Add more detailed book and author information.

Implement POST/PUT/DELETE routes to add and update books.

Improve error handling and input validation.

Add documentation of all API routes in this README.
