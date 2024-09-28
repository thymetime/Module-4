// TODO: Create a variable that selects the form element
const formSubmission = document.getElementById('blog-form');
const submitButton = document.getElementById('form-submit');
console.log(formSubmission);

// TODO: Create a function that handles the form submission. 
// Grab the form data and store it in local storage, 
function formSubmit() { 

    // create object that stores form data with an id
    if (!localStorage.getItem('blogs')) {
        localStorage.setItem('logs', 'blogs array created')
        localStorage.setItem('blogs', []) 
    }
    const formData = new FormData(formSubmission, submitButton);

    let blog = Object.fromEntries(formData);

    // let blog = {};
    // for (const [key, value] of formData) {
    //     blog[key] = value;
    // }
    // let blogTitle = blog.title;

    localStorage.setItem('logs', 'THIS IS A BLOG: ' + JSON.stringify(blog));
    storeLocalStorage(blog)

}

// then redirect to the blog page using the `redirectPage` function. 
// If the form is submitted with missing data, display an error message to the user.
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formSubmission.addEventListener('submit', (event) => {
    event.preventDefault();
    formSubmit();
    redirectPage('./blog.html');
    console.log('switched to blog')
});
