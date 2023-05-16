// Add your code here
let form = document.getElementById("contactFormId");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("fullname").value;
  let username = document.getElementById("username").value;
  let emailAddress = document.getElementById("email").value;
  let date = document.getElementById("birthdate").value;
  let she_checkbox = document.getElementById("she").checked;
  let he_checkbox = document.getElementById("he").checked;
  let they_checkbox = document.getElementById("they").checked;
  // let prefer_not_to_say = document.getElementById("prefer_not_to").checked;

  console.log("======== Form Submission =======");
  console.log("Name:", name);
  console.log("Username:", username);
  console.log("Email:", emailAddress);
  console.log("Date of Birth:", moment(date).format("LL"));

  if (she_checkbox) {
    console.log("Preferred Pronouns : she/her");
  } else if (he_checkbox) {
    console.log("Preferred Pronouns : he/him");
  } else if (they_checkbox) {
    console.log("Preferred Pronouns : they/them");
  } else {
    console.log("Preferred Pronouns : I prefer not to say ");
  }
});
