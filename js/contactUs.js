const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 


  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  
  let hasError = false;

  if (name.value.trim() === "") {
    name.classList.add("error");
    document.getElementById("nameError").style.display = "block";
    hasError = true;
  } else {
    name.classList.remove("error");
    document.getElementById("nameError").style.display = "none";
  }

  if (email.value.trim() === "") {
    email.classList.add("error");
    document.getElementById("emailError").style.display = "block";
    hasError = true;
  } else {
    email.classList.remove("error");
    document.getElementById("emailError").style.display = "none";
  }

  if (message.value.trim() === "") {
    message.classList.add("error");
    document.getElementById("messageError").style.display = "block";
    hasError = true;
  } else {
    message.classList.remove("error");
    document.getElementById("messageError").style.display = "none";
  }


  if (!hasError) {
    alert("Message Sent Successfully!");
    form.reset();
  }
});
