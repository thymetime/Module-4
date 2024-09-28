// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
  // const str = '[{"username": 1, "title": "hey", "content": "no"}, {"username": 2, "title": "hi", "content": "yea"}]'
  // const obj = JSON.parse(str);
  // console.log(obj)

  const blogs_str = localStorage.getItem('blogs');
  console.log("BLOGS" + blogs_str);
  let blogs_obj;
  try {
    blogs_obj = JSON.parse(blogs_str);
    console.log('parsed obj string into: ' + blogs_obj)
  } catch {
    console.log('didn\'t parse this string: ' + blogs_str)
    return []
  }

  return blogs_obj;

}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(blogpost) {
  const current_blogs = readLocalStorage();

  current_blogs.push(blogpost)
  console.log("me blogs: " + current_blogs);

  localStorage.setItem('blogs', JSON.stringify(current_blogs));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// // Save the original localStorage.setItem function
// const originalSetItem = localStorage.setItem;

// // Override localStorage.setItem
// localStorage.setItem = function (key, value) {
//   console.log(`localStorage.setItem called with key: ${key}, value: ${value}`);

//   // Log the stack trace
//   console.trace();

//   // Call the original localStorage.setItem method
//   originalSetItem.apply(this, arguments);
// };