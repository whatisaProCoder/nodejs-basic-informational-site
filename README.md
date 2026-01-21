# Basic Informational Site

A simple Node.js web server project from The Odin Project curriculum. This project includes two implementations: one using Node.js's built-in HTTP module and another using Express.js.

## What This Project Does

This is a basic web server that serves static HTML pages. It demonstrates the fundamentals of:

- Creating a Node.js HTTP server (vanilla Node.js)
- Building web servers with Express.js
- Handling different routes/URLs
- Serving HTML files
- Implementing a 404 error page

## Files

### Server Files

- `server.js` - Vanilla Node.js HTTP server implementation (port 8080)
- `express-server.js` - Express.js server implementation (port 3000)
- `package.json` - Project dependencies and scripts

### HTML Pages

- `index.html` - Home page
- `about.html` - About page
- `contact-me.html` - Contact page
- `404.html` - Error page for non-existent routes

## How to Run

### Option 1: Vanilla Node.js Server

```bash
node server.js
```

Then visit:

- `http://localhost:8080` - Home page
- `http://localhost:8080/about` - About page
- `http://localhost:8080/contact-me` - Contact page

### Option 2: Express.js Server (Recommended)

```bash
npm start
```

Then visit:

- `http://localhost:3000` - Home page
- `http://localhost:3000/about` - About page
- `http://localhost:3000/contact` - Contact page

The Express server runs with auto-reload enabled using the `--watch` flag.

## Installation

Install dependencies before running the Express server:

```bash
npm install
```

## Learning Goals

This project helped me understand:

- How Node.js HTTP servers work from scratch
- The benefits of using Express.js framework
- Routing requests to different pages
- Reading and serving files with fs module
- Using Express middleware and route handlers
- Basic error handling and 404 pages
- The difference between vanilla Node.js and Express approaches
