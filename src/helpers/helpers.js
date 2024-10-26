// Afficher/cacher mdp
const showHidePassword = (input, eye, eyeSlash) => {
  if (input.type === "password" && input.value !== "") {
    input.type = "text"
    eye.classList.add("d-none")
    eyeSlash.classList.remove("d-none")
  } else {
    input.type = "password"
    eye.classList.remove("d-none")
    eyeSlash.classList.add("d-none")
  }
}
export { showHidePassword }
