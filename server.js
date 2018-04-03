// server.js
// Module 2 Lab
// Introduction to nodejs: Microsoft

// Import dependencies
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')

const port = 3000

// In-memory data store
let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
      {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
      {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}      
    ]
    }
  ]
}

// Creating Express app
let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use((req, res, next) => {
	req.store = store
	next()
})

// Posts
app.get('/posts', routes.posts.getPosts)
app.post('/posts/', routes.posts.addPost)
app.put('/posts/:pId', routes.posts.updatePost)
app.delete('/posts/:pId', routes.posts.removePost)

// Comments
app.get('/posts/:pId/comments', routes.comments.getComments)
app.post('/posts/:pId/comments', routes.comments.addComment)
app.put('/posts/:pId/comments/:cId', routes.comments.updateComment)
app.delete('/posts/:pId/comments/:cId', routes.comments.removeComment)

app.listen(port)