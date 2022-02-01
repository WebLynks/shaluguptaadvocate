function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "gitanshuaptitute@gmail.com",
      Password: "Qwerty@9182",
      To: 'gitanshugupta7@gmail.com',
      From: "anything@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
     .then( console.log("Mail sent successfully") ).catch((error) => {
        console.log(error);
      })
  }


