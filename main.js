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
// Task 4: Handle Errors 
errorMessage.textContent = 'Failure loading products. Try again in a few minutes.'; //Error message informs user about loading issue
console.error('Fetch error:', error); //Logs error to console for debugging with details about what went wrong
    });
});

//Task 3: Display Product Details Dynamically
function displayProducts(products) { //function to display product details
    const productContainer = document.getElementById('productContainer'); //selects container where products are displayed
    products.forEach(product => {
        const productElement = document.createElement('div'); //creates new div element for each product
        productElement.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h2>${product.fields.name}</h2>
            <p>Price: ${product.fields.price/100}</p>
            <p>Company: $${product.fields.company}</p>
        `; //Sets inner HTML of product element with product details.
        productContainer.appendChild(productElement); //Appends product element to product container
    });
} 