// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  console.clear;

  try{

    if (dividend === "" || divider === "") {
       result.innerText = "Division not performed. Both values are required in inputs. Try again";   
    }

    if (divider <= 0) {
        result.innerText = "Division not performed. Invalid number provided. Try again";
        throw new Error("Invalid input provided"); 
    }

    if (isNaN(dividend) || isNaN(divider)) {
        document.body.innerHTML = "Something critical went wrong. Please reload the page."; 
        throw new Error ('Please reload the page') 
    }

    const sum = dividend / divider

        if (!Number.isNaN(sum) && Number.isInteger(sum)){
        result.innerText = sum
        } else {
            result.innerText ="Division not performed. Invalid number provided. Try again";
            throw new Error ("Division not performed. Invalid number provided. Try again")
        }

  } catch (error){
        console.error(error);
  }

});


  