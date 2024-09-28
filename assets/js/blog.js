// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const backButton = document.getElementById('back-button');
const blog_main = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM

function createBlogPost(post) {
    const blog_post__card = document.createElement('li');
    const blog_post = document.createElement('article');
    const blog_title = document.createElement('h2');
    const blog_content = document.createElement('p');
    const blog_signature = document.createElement('blockquote');

    blog_title.innerHTML = post.title;
    blog_content.innerHTML = post.content;
    blog_signature.innerHTML = post.username;

    blog_post.append(blog_title);
    blog_post.append(blog_content);
    blog_post.append(blog_signature);
    blog_post__card.append(blog_post);

    blog_main.append(blog_post__card);
}

// TODO: Create a function that handles the case where there are no blog posts to display

function checkBlogPost() {
    const message = document.createElement('h2');
    message.innerHTML = "There are no blog posts"

    if (!localStorage.getItem('blogs') || localStorage.getItem('blogs').length == 0) {
        blog_main.append(message)
    }
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    checkBlogPost();

    const blogs = readLocalStorage();
    console.log("Render Blog list: " + blogs)

    for (const blog of blogs) {
        createBlogPost(blog);
    }
    console.log(blogs)

}
// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', (event) => {
    event.preventDefault();
    redirectPage('./index.html');
    console.log('swtiched to form');
})
