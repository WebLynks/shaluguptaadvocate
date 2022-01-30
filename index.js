//index.js  
function sendEmail() {
    Email.send({
        SecureToken : "013bcbbc-02c4-4136-b93f-fd099827470a",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


