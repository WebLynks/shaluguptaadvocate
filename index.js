function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "gitanshuaptitute@gmail.com",
      Password: "Qwerty@9182",
      To: 'gitanshuaptitute@gmail.com',
      From: "gitanshuaptitute@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }


