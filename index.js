//index.js  
function sendEmail() {
    Email.send({
        SecureToken : "013bcbbc-02c4-4136-b93f-fd099827470a",
        To : 'gitanshugupta7@gmail.com',
        From : "gitanshuaptitute@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


