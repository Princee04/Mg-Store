// Afficher/cacher mdp
const showHidePassword = (input, eye, eyeSlash) => {
  if (input.type === "password" && input.value !== "") {
    input.type = "text";
    eye.classList.add("d-none");
    eyeSlash.classList.remove("d-none");
  } else {
    input.type = "password";
    eye.classList.remove("d-none");
    eyeSlash.classList.add("d-none");
  }
};

// Récupération du tsu
const getParticularID = () => Date.now();

// Récupération d'une extension de fichier
const getFileType = (file) => file.type.split("/")[1].toLowerCase();

// Vérification de la validité d'un fichier utilisé comme avatar
const isValidFile = (file) => {
  const validTypeFile = ["jpeg", "png", "jpg"];
  const fileType = getFileType(file);
  return validTypeFile.includes(fileType);
};

// Verification si un email est déja utilisé
const isEmailAlreadyUsed = (users, email) =>
  users.find((user) => user.email === email);

// Verification correspondance email mais mdp incorrect
const isEmailhMatching = (users, auth) =>
  users.find(
    (user) => user.email === auth.email && user.password !== auth.password
  );

// Inscrit ?
const isEmailAndPasswordMatching = (users, auth) =>
  users.find(
    (user) => user.email == auth.email && user.password === auth.password
  );

export {
  showHidePassword,
  getParticularID,
  isValidFile,
  isEmailAlreadyUsed,
  isEmailhMatching,
  isEmailAndPasswordMatching,
};
