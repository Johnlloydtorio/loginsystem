const registrationForm = document.querySelector("#registrationForm");

registrationForm.onsubmit = (e) => {
  e.preventDefault();

  const userId = document.querySelector("#user-id");
  const password = document.querySelector("#password");
  const userName = document.querySelector("#user-name");
  const address = document.querySelector("#address");
  const country = document.querySelector("#country");
  const zipCode = document.querySelector("#zip-code");
  const email = document.querySelector("#email");
  const sex = document.querySelectorAll(".sex");
  const language = document.querySelectorAll(".language");
  const about = document.querySelector("#about");

  // Required all inputs
  //   if (
  //     userId.value == "" ||
  //     password.value == "" ||
  //     userName.value == "" ||
  //     address.value == "" ||
  //     country.value == "" ||
  //     zipCode.value == "" ||
  //     email.value == "" ||
  //     about.value == "" ||
  //     !language[0].checked ||
  //     !language[1].checked ||
  //     !sex[0].checked ||
  //     !sex[1].checked
  //   ) {

  //   }
  const userIdValue = userId.value;
  console.log(userIdValue);
  if (!userIdValue || userIdValue.length < 5|| userIdValue.length > 12) {
    const errorUserId = document.querySelector(".error-user-id");
    errorUserId.textContent = "Required and Must Be 5 to 12";
    setInterval(() => {
        errorUserId.textContent ="";
    }, 3000)
 }
 const passwordValue = password.value;
 if (!passwordValue || passwordValue.length < 7 || passwordValue.length > 12) {
    const errorPassword = document.querySelector(".error-user-password");
    errorPassword.textContent = "Required and Must Be 7 to 12";
    setInterval(() => {
        errorPassword.textContent="";
    }, 3000);
 }
    
}