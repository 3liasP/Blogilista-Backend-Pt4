const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})
  
    let blogObject = new Blog(helper.initialBlogs[0])
    await blogObject.save()
  
    blogObject = new Blog(helper.initialBlogs[1])
    await blogObject.save()

    blogObject = new Blog(helper.initialBlogs[2])
    await blogObject.save()

    blogObject = new Blog(helper.initialBlogs[3])
    await blogObject.save()
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.initialBlogs.length)
})


test('a valid blog can be added ', async () => {
    const newBlog = {
        title: "testing a whole new blog!",
        author: "Wayne Rooney",
        url: "http://localhost:3003/api/blogs",
        likes: 68
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    const BlogsAtEnd = await helper.blogsInDb()
    expect(BlogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
    const title = BlogsAtEnd.map(n => n.title)
    expect(title).toContain(
      'testing a whole new blog!'
    )
})

// This one last!
afterAll(() => {
    mongoose.connection.close()
})