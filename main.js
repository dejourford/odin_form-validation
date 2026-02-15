// function for each input validation
const validateEmail = (input) => {
    const value = input.value.trim();
    const parts = value.split("@");

    if (parts.length !== 2) return false;

    const [local, domain] = parts;
    if (!local || !domain) return false;

    const allowedDomains = [".com", ".net", ".gov", ".edu"]

    const hasValidExtension = allowedDomains.some((ext) =>
        domain.endsWith(ext)
    )

    return hasValidExtension
}

// function for removing active/inactive classes from input fields when focused
const removeClassProperty = (element) => {
    element.removeAttribute("class")
}

// function for each input validation
const validateCountry = (input) => {
    console.log("country validated");
}

// function for each input validation
const validateZipCode = (input) => {
    console.log("zip code validated");
}

// function for each input validation
const validatePassword = (input) => {
    console.log("password validated");
}

// function for each input validation
const validatePasswordConfirmation = (input) => {
    console.log("password confirmed");
}


// create listener for form submit or cancel
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted")

})

// listener for cancel button
document.querySelector("#cancel").addEventListener("click", () => {
    form.reset();
})

// listener for input fields
form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
        removeClassProperty(input);
    })
})

form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", (e) => {

        console.log(e.currentTarget.name)
        const target = e.currentTarget



        const targetName = e.currentTarget.name;
        // if statements for each input
        if (targetName === "email" && validateEmail(target)) {
            target.classList.add("active")
        } else {
            target.classList.add("inactive")
        }
        if (targetName === "country") {
            validateCountry(target);
        }
        if (targetName === "zip code") {
            validateZipCode(target);
        }
        if (targetName === "password") {
            validatePassword(target);
        }
        if (targetName === "password confirmation") {
            validatePasswordConfirmation(target);
        }

        // clear class from input if blank
        if (target.value === "") {
            console.log(target.value)
            console.log(input)
            removeClassProperty(input);
        }
    })
})

