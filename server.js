var http = require('http');
var fs = require('fs');


function on404Request(response){
	response.writeHead(404, {'content-Type':'text/plain'});
	response.write('Error 404: Pages cannot be found');
	response.end();
}

function onRequest(request, response){
	if(request.method =='GET'&& request.url =='/'){
		response.writeHead(200, {'content-Type':'text/html'});
		//response.write('hello');
		//response.end();
		fs.createReadStream('index.html').pipe(response);
	}else{
		on404Request(response);
	}
};


http.createServer(onRequest).listen(3000);
console.log("Server is running...");