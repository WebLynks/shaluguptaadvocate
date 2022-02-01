function sendEmail() {
  username = document.getElementById('username').value;
  //email = document.getElementById('email').value;
  phone = document.getElementById('phone').value;

  console.log(`mailto:gitanshugupta7@gmail.com?subject=Appointment&body= ${username}`);
  if(username != "" &&  phone != "")
  {
    window.open(`mailto:gitanshugupta7@gmail.com?subject=Appointment&body=I, ${username}, would like to make an appointment with you, please contact me using my phone number, ${phone}.`);
  }
}


