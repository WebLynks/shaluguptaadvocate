//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "gitanshuaptitute@gmail.com",
	Password : "Qwerty@9182",
	To : 'gitanshugupta7@gmail.com',
	From : "gitanshuaptitute@gmail.com",
	Subject : "Test Mail",
	Body : "Hello",
	}).then(
		message => alert("mail sent successfully")
	);
}