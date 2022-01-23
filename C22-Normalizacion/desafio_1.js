const normalizr = require('normalizr')
const {normalize, schema} = normalizr
const util = require('util') //Module utils provisto por node.js

const blogposts = [{
  id: 1,
  title: "El sol",
  description: "Hablemos del sol",
  content: "bla baljwe fefqwjehbferf",
  author: {
    id: 1,
    name: "Josefina",
    city: "San Juan"
  },
  comments: [
    { id: 1, author: "Juan", content: "Wow" },
    { id: 2, author: "Pedro", content: "jajajaja" },
  ],
},
{
    id: 2,
    title: "La luna",
    description: "Hablemos sobre la luna",
    content: "bla baljwe fefqwjehbferf",
    author: {
      id: 1,
      name: "Josefina",
      city: "San Juan"
    },
    comments: [],
  }
];

const authorSchema = new schema.Entity('authors')
const commentSchema = new schema.Entity('comments')
const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
})

const normalizedBlogpost = normalize(blogposts, [postSchema])
print(normalizedBlogpost);

//Imprime los objs de manera más legible en la consola
function print(obj) {console.log(util.inspect(obj, false, 12, true))}