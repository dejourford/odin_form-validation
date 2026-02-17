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

    if (hasValidExtension) {
        input.classList.add("active")
    }

    return hasValidExtension
}

// function for each input validation
const selectCountryElement = document.querySelector("#select-country");

const validateCountry = () => {

    selectCountryElement.addEventListener("change", () => {
        const selectedValue = selectCountryElement.value;
        console.log(selectedValue);

        return countries.includes(selectedValue)
    })
}

// function for each input validation
const zipCodeInput = document.querySelector("#zipCode");

const validateZipCode = () => {

    removeClassProperty(zipCodeInput)

    if (zipCodeInput.value.length > 5 || zipCodeInput.value.length < 5) {
        zipCodeInput.classList.add("inactive")
    } else { zipCodeInput.classList.add("active") }

}

// function for each input validation
const passwordInput = document.querySelector("#password-input")

const validatePassword = () => {
    removeClassProperty(passwordInput)
    
    console.log("password validated");
    console.log(passwordInput.value.length);
    if (passwordInput.value.length === 0) {
        passwordInput.classList.add("inactive")
    } else {
        passwordInput.classList.add("active")
    }
}

// function for each input validation
const passwordConfirmationInput = document.querySelector("#password-confirmation-input")

const validatePasswordConfirmation = (input) => {
    console.log("password confirmed");

    removeClassProperty(passwordConfirmationInput)
    
    console.log("password confirmation validated");
    console.log(passwordConfirmationInput.value.length);
    if (passwordConfirmationInput.value.length === 0) {
        passwordConfirmationInput.classList.add("inactive")
    } else {
        passwordConfirmationInput.classList.add("active")
    }
}

// function to verify passwords match
const checkPasswords = (validatedPassword) => {
    console.log(validatedPassword)
}

// function for removing active/inactive classes from input fields when focused
const removeClassProperty = (element) => {
    element.removeAttribute("class")
}

// create listener for form submit or cancel
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted")

    const allInputs = document.querySelectorAll("input")
    console.log(allInputs)
    
   const allInputAreActive = [...allInputs].every(input =>
    input.classList.contains("active")
);


const passwordInput = document.querySelector("#password-input")
    const passwordConfirmationInput = document.querySelector("#password-confirmation-input")
    if (allInputAreActive && passwordInput.value === passwordConfirmationInput.value) { 
        alert("High Five!")
        form.reset();
    }


    console.log(allInputAreActive)

    

    
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
        if (targetName === "email" && !validateEmail(target)) {
            target.classList.add("inactive")
        } 
        if (targetName === "zip code") {
            validateZipCode();
        }
        if (targetName === "password") {
            validatePassword();
        }
        if (targetName === "password confirmation") {
            validatePasswordConfirmation(target);
        }
    })
})

// listener for cancel button
document.querySelector("#cancel").addEventListener("click", () => {
    form.reset();
})

// add select options to country
const countries = [
    "United States", "Canada", "Mexico", "Brazil", "Argentina",
    "United Kingdom", "Ireland", "France", "Germany", "Italy",
    "Spain", "Portugal", "Netherlands", "Belgium", "Sweden",
    "Norway", "Denmark", "Finland", "Poland", "Switzerland",
    "Australia", "New Zealand", "Japan", "China", "India",
    "South Korea", "Thailand", "Vietnam", "Philippines",
    "South Africa", "Nigeria", "Kenya", "Egypt", "Morocco",
    "Saudi Arabia", "United Arab Emirates", "Israel", "Turkey"
];

countries.forEach((country) => {
    const option = document.createElement("option");
    option.textContent = country;
    selectCountryElement.append(option)
})
