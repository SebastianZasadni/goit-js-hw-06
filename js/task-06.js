const validationInput = document.querySelector('[data-length="6"]');


validationInput.addEventListener("input", () => {
    if (validationInput.value.length === 6){
        document.activeElement.setAttribute("class", "valid"); 
                             }
    else{
    validationInput.setAttribute("class", "invalid");
        }
        if (validationInput.value.length === 0){
            validationInput.setAttribute("class", "normal")
            }
}); 

