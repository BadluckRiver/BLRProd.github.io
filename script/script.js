const name = document.getElementById("name");
const email = document.getElementById("mail");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
    const errors = []; 

    if (name.value.trim() === ""){
        errors.push("Name is Required.")
    }

    if (mail.value.length < 4){
        errors.push("Email is Required.")
    }

    if (errors.length > 0) {

    e.preventDefault()
    errorMessage.toggleAttribute('hidden');
    errorMessage.innerHTML = errors.join(', ');
    }
})