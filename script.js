const form = document.getElementById("myForm");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
})