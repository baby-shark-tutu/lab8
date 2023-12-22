const blogs = document.querySelector('.blogs')

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
})
  .then((response) => response.json())
  .then((json) => json.forEach((blog) => add_blog(blog)))

function add_blog(blog) {
    let new_blog = document.createElement('div')

    new_blog.classList.add('blog')
    new_blog.append(document.createElement('h1'))
    new_blog.append(document.createElement('p'))
    new_blog.firstChild.textContent = blog['title']
    new_blog.lastChild.textContent = blog['body']
    blogs.append(new_blog)
}