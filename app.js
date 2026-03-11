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

let url = "https://meowfacts.herokuapp.com/"

fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))

/* 
	? Fetch Process
	* 1. 
*/