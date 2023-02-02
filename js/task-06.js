const validationInput = document.querySelector('[data-length="6"]');

validationInput.addEventListener("blur", () => {
    if (validationInput.value.length !== 6){
        validationInput.setAttribute("class", "invalid"); 
            }
    else{
    validationInput.setAttribute("class", "valid");
        }
       });

