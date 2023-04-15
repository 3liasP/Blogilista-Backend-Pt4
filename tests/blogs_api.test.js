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

describe('addition of a blog', () => {
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
})

describe('deletion of a blog', () => {
    test('succeeds with status code 204 if id is valid', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToDelete = blogsAtStart[0]

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

      const blogsAtEnd = await helper.blogsInDb()

      expect(blogsAtEnd).toHaveLength(
        helper.initialBlogs.length - 1
      )

      const ids = blogsAtEnd.map(r => r.id)

      expect(ids).not.toContain(blogToDelete.id)
    })
})

// This one last!
afterAll(() => {
    mongoose.connection.close()
})