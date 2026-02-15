// function for each input validation
const validateEmail = () => {
    console.log("email validated");
}

// function for each input validation
const validateCountry = () => {
    console.log("country validated");
}

// function for each input validation
const validateZipCode = () => {
    console.log("zip code validated");
}

// function for each input validation
const validatePassword = () => {
    console.log("password validated");
}

// function for each input validation
const validatePasswordConfirmation = () => {
    console.log("password confirmed");
}


// create listener for form submit or cancel
document.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted")
    
})

// listener for cancel button
const form = document.querySelector("form");
document.querySelector("#cancel").addEventListener("click", () => {
    form.reset();
})

// listener for input fields
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", (e) => {
        console.log(e.currentTarget.name)
const targetName = e.currentTarget.name;
        // if statements for each input
        if (targetName === "email") {
            validateEmail();
        }
        if (targetName === "country") {
            validateCountry();
        }
        if (targetName === "zip code") {
            validateZipCode();
        }
        if (targetName === "password") {
            validatePassword();
        }
        if (targetName === "password confirmation") {
            validatePasswordConfirmation();
        }
    })
})

