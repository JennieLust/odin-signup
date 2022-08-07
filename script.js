/*Javascript to check password fields match each other 
error msg replaces other when not matched
add JS that turns error msg unhidden when invalid output*/

/* init divs */
const firstNameErr = document.querySelector(".err1")
const firstNameInp = document.querySelector(".first-name")
const btn = document.querySelector(".submit-button")

const lastNameErr = document.querySelector(".err2")
const lastNameInp = document.querySelector(".last-name")

const emailErr = document.querySelector(".err3")
const emailInp = document.querySelector(".email")

const phoneErr = document.querySelector(".err4")
const phoneInp = document.querySelector(".phone")

const password1Err = document.querySelector(".err5")
const password1Inp = document.querySelector(".password1")

const password2Inp = document.querySelector(".password2")

/* validation upon clicking submit */
btn.addEventListener('click', () => {    
    /* checks if valid, applies appr style */
    if (firstNameInp.checkValidity() === false) {
        firstNameErr.style.color = "red";
        firstNameInp.style.borderColor = "red";
        firstNameInp.style.borderRadius = "4px";
    } else {
        firstNameErr.style.color = "#21241a";
        firstNameInp.style.border = "2px solid green";
        firstNameInp.style.borderRadius = "3px";
    };
    if (lastNameInp.checkValidity() === false) {
        lastNameErr.style.color = "red";
        lastNameInp.style.borderColor = "red";
        lastNameInp.style.borderRadius = "4px";
    } else {
        lastNameErr.style.color = "#21241a";
        lastNameInp.style.border = "2px solid green";
        lastNameInp.style.borderRadius = "3px";
    }
    if (emailInp.checkValidity() === false) {
        emailErr.style.color = "red";
        emailInp.style.borderColor = "red";
        emailInp.style.borderRadius = "4px";
    } else {
        emailErr.style.color = "#21241a";
        emailInp.style.border = "2px solid green";
        emailInp.style.borderRadius = "3px";
    }
    if (phoneInp.checkValidity() === false) {
        phoneErr.style.color = "red";
        phoneInp.style.borderColor = "red";
        phoneInp.style.borderRadius = "4px";
    } else {
        phoneErr.style.color = "#21241a";
        phoneInp.style.border = "2px solid green";
        phoneInp.style.borderRadius = "3px";
    }
    if (password1Inp.checkValidity() === false) {
        password1Err.style.color = "red";
        password1Inp.style.borderColor = "red";
        password1Inp.style.borderRadius = "4px";
    } else {
        password1Err.style.color = "#21241a";
        password1Inp.style.border = "2px solid green";
        password1Inp.style.borderRadius = "3px";
    }
    if (password1Inp.checkValidity() === false) {
        password2Inp.style.borderColor = "red";
        password2Inp.style.borderRadius = "4px";
    } else {
        password2Inp.style.border = "2px solid green";
        password2Inp.style.borderRadius = "3px";
    }
    /* validates passwords against each other and applies validation and style*/
    if (password1Inp.value !== password2Inp.value) {
        password1Inp.setCustomValidity("Invalid field")
        password2Inp.setCustomValidity("Invalid field")
        password1Err.innerHTML = "Lösenord måste matcha";
        password1Err.style.color = "red";
        password1Inp.style.borderColor = "red";
        password1Inp.style.borderRadius = "4px";
        password2Inp.style.borderColor = "red";
        password2Inp.style.borderRadius = "4px";
    } else {
        password1Err.style.color = "#21241a";
        password1Inp.style.border = "2px solid green";
        password1Inp.style.borderRadius = "3px";
        password2Inp.style.border = "2px solid green";
        password2Inp.style.borderRadius = "3px";
    }

    /* Check to make sure obl. fields have values */
    if (firstNameInp.value.length == 0) {
        firstNameInp.setCustomValidity("Invalid field");
    } 
    if (lastNameInp.value.length == 0) {
        lastNameInp.setCustomValidity("Invalid field");
    } 
    if (emailInp.value.length == 0) {
        emailInp.setCustomValidity("Invalid field");
    } 
    if (emailInp.value.length == 0) {
        emailInp.setCustomValidity("Invalid field");
    } 
    if (password1Inp.value.length == 0) {
        password1Inp.setCustomValidity("Invalid field");
    } 
    if (password2Inp.value.length == 0) {
        password2Inp.setCustomValidity("Invalid field");
    }

})


document.querySelector(".form1").appendChild(firstNameInp)
document.querySelector(".form1").appendChild(firstNameErr)
document.querySelector(".form2").appendChild(lastNameInp)
document.querySelector(".form2").appendChild(lastNameErr)

document.querySelector(".form3").appendChild(emailInp)
document.querySelector(".form3").appendChild(emailErr)

document.querySelector(".form4").appendChild(phoneInp)
document.querySelector(".form4").appendChild(phoneErr)
document.querySelector(".form5").appendChild(password1Inp)
document.querySelector(".form5").appendChild(password1Err)
document.querySelector(".form6").appendChild(password2Inp)


document.querySelector(".button-area").appendChild(btn)
