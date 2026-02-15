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