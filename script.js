const btnSubit = document.getElementById("submit-email");
const input = document.querySelector(".input-email");
const errorMsg = document.querySelector(".error")

btnSubit.addEventListener ("click", (e) => {
  if (/^\S+@\S+\.\S+$/.test(input.value)) {
    // subit if email is formatted correctly
  } else {
    e.preventDefault();
    errorMsg.classList.remove("display-none")
  }
})