/* 
	? Application Programming Interface (API)
	* a way for us to communicate with the server
	* client (front-end)
	* server (back-end)
	* enables for RESTful architecture request/response lifecycle
		* request - data we send
			* headers (metadata)
			* query parameters (GET)
			* body (POST)
		* response - data we receive
			* headers
			* payload
			* status code
	* REST - representational state transfer
		* a specific way for us to communicate in req/res form
		* there's also SOAP which uses XML
		* stateless, cacheable, and has layers

	? REST works via CRUD
	* anytime you've got a request, it will be one of types:
		* create
		* read
		* update
		* delete
	* they correspond to the following HTTP methods
		* POST
		* GET
		* PUT
		* DELETE
*/

/* 
	? Fetch API
	* asynchronous function
	* we need it because we don't know how long fetching data will take
	* we need to wait until it's retrieved before continuing code execution
	* fetch allows us to handle data in three states:
		* pending - hasn't finished
		* success - finished
		* failed - not finished
*/

let url = "https://meowfacts.herokuapp.com/";
console.log(url);

// fetch(url).then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error))
// 	.then(() => console.log("This runs after fetch finished"));
console.log("This code runs");

/* 
	? Fetch Process
	* 1. Fetch grabs yoru resource and returns a Promise object
	* this Promise object can be pending, fulfilled, or rejected
	* 2. Use .then() resolver to catch the Promise and resolve it
	* we catch the Promise inside a parameter, usually called response/res
	* 3. The response is still useless because it's encapsulated as JSON
	* 4. Utilize Response.json() method to read it and strip it
	* 5. .json() returns another Promise which is useless to us
	* 6. Use .then() resolver again to strip that Promise()
	* we catch it into a parameter and do whatever we want (in our case, console.log)
	* 7. We can use .catch() to do some error handling
	* Only triggered if Promise gets rejected
	* Allows us to reach that last .then() instead of ignoring it
*/

/* 
	? Asynchronous Functions & Fetch
	* starts with async keyword
	* returns a Promise object
	* the invocation can be resolved with .then() still (but looks odd)
	* await keyword can be used inside async functions ONLY
	* works like .then() resolver
	* strips the data out of the Promise object
	* error handling is done using try { } catch() { }
*/

async function getData() {
	try {
		// code block to attempt
		
		// await strips the Promise from fetch
		let response = await fetch(url)
		// await strips the Promise from json-ified res
		let data = await response.json()
		console.log(data)
	} catch(error) {
		// code block to run if any error occurs
		console.log(error)
	}
}

getData()

/* 
	? Challenge
	* pull up your todo list project
	* grab the typicode API link: https://jsonplaceholder.typicode.com/todos
	* fetch and retrieve the data
	* create an element for title data
	* fill in the content of your li.textContent to hold teh title
	* ensure all of them appear within your todo list
	* this will likely require looping over the data
	
	! Extra - string interpolate title and completed. If completed, add a checkmark
*/