console.log("Testing ES6 Compilation");

let login = (username, password) => {
	if(username !== 'admin' || password !== 'tubular') {
		console.log("Incorrect Login");
	}
	else {
		console.log('Welcome!');
	}
}

login('admin','tubular');