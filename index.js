//index.js  
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "gitanshuaptitute",
        Password : "Qwerty@9182",
        To : 'gitanshugupta7@gmail.com',
        From : "gitanshugupta7@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


