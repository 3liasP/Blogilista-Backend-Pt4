const Blog = require('../models/blog')

const initialBlogs = [
    {
    "title": "test",
    "author": "Elias Peltonen",
    "url": "http://localhost:3003/api/blogs",
    "likes": 3,
    "id": "64398bedb3331dfec353643d"
    },
    {
    "title": "test2",
    "author": "Kylian Mbappe",
    "url": "http://localhost:3003/api/blogs",
    "likes": 7,
    "id": "64399000b3331dfec3536444"
    },
    {
    "title": "test3",
    "author": "Lionel Messi",
    "url": "http://localhost:3003/api/blogs",
    "likes": 10,
    "id": "64399011b3331dfec3536446"
    },
    {
    "title": "test4",
    "author": "Cristiano Ronaldo",
    "url": "http://localhost:3003/api/blogs",
    "likes": 77,
    "id": "6439919bdc868af5fbf65857"
    }
]

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, blogsInDb
}