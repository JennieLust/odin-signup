/*Javascript to check password fields match each other 
error msg replaces other when not matched
add JS that turns error msg unhidden when invalid output*/


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

const password2Err = document.querySelector(".err6")
const password2Inp = document.querySelector(".password2")


btn.addEventListener('click', () => {
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

})


document.querySelector(".form1").appendChild(firstNameInp)
document.querySelector(".form1").appendChild(firstNameErr)
document.querySelector(".form2").appendChild(lastNameInp)
document.querySelector(".form2").appendChild(lastNameErr)
document.querySelector(".form3").appendChild(email)

document.querySelector(".button-area").appendChild(btn)
