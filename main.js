//Task 1: Setup Basic HTML Structure for Product Page
//^ for task 1, see index.html

// Task 2: Fetch Products from the API Using Fetch and Promises
document.addEventListener('DOMContentLoaded', () => { //Waits fro HTML to be fully loaded
    const productContainer = document.getElementById('productContainer'); //Displays products
    const errorMessage = document.getElementById('errorMessage'); //Displays error message

    fetch('https://www.course-api.com/javascript-store-products') //fetch product data from API
        .then(response => {
            if (!response.ok) { //if response status has an error
                throw new Error('Network response was unsatisfactory'); //then give error message
            }
            return response.json(); //returns JSON if response is unsatisfactory
        }).then(data => { //Processes JSON data
    
            displayProducts(data); //displays fetch product data
        }).catch(error => { //catches errors in fetched product data