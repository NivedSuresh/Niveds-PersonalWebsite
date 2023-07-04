

function validateForm() {

  var name = document.getElementById("name").value;
  var mobilenumber = document.getElementById("mobilenumber").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var sent=true;

  if (name == "") {
    msg_name.innerHTML = "Name must be filled out"
    setTimeout(function () {
      msg_name.innerHTML = ""
    }, 5000)
    sent=false;
  }

  if (/\d/.test(name)) {
    msg_name.innerHTML = "Name should only contain characters"
    setTimeout(function () {
      msg_name.innerHTML = ""
    }, 5000);
    sent=false;
  }

  if (mobilenumber == "") {
    msg_number.innerHTML = "Mobile Number must be filled out"
    setTimeout(function () {
      msg_number.innerHTML = ""
    }, 5000)
    sent=false;
  }

  if (isNaN(mobilenumber)) {
    msg_number.innerHTML = "Mobile Number must be Digits"
    setTimeout(function () {
      msg_number.innerHTML = ""
    }, 5000)
    sent=false;
  }

  if (mobilenumber.length < 10) {
    msg_number.innerHTML = "Mobile Number must have 10 digits"
    setTimeout(function () {
      msg_number.innerHTML = ""
    }, 5000)
    sent=false;
  }

  if (mobilenumber.length > 10) {
    msg_number.innerHTML = "Mobile Number must have only 10 digits"
    setTimeout(function () {
      msg_number.innerHTML = ""
    }, 5000)
    sent=false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    msg_mail.innerHTML = "Email must be a valid email address"
    setTimeout(function () {
      msg_mail.innerHTML = ""
    }, 5000)
    sent=false;
  }

  if (subject == "") {
    msg_subject.innerHTML = "Subject must be filled out"
    setTimeout(function () {
      msg_subject.innerHTML = ""
    }, 5000)
    sent=false;
  }


  if (message == "") {
    msg_message.innerHTML = "Message must be filled out"
    setTimeout(function () {
      msg_message.innerHTML = ""
    }, 5000)
    sent=false;
  }

  if(sent==true){
    return true;
  }
  else{
    return false;
  }
  
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzOe9Ud9gq6Fws7bTHWRqd9M0Fi4lfDr1W69DsbBZXCAOx9x0x5K-YVcDGs3-d9uAn8/exec';
const form = document.getElementById("form")
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  if (validateForm()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Sent Successfully"
        // alert("Sent Successfully")
        setTimeout(function () {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  }
})