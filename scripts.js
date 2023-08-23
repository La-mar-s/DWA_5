// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  try{

    if (dividend = "" || divider == "")
        throw "Division not performed. Both values are required in inputs. Try again";
    if (divider < 0)
        throw "Division not performed. Invalid number provided. Try again";
    if (isNaN(dividend || divider))
        throw "Something critical went wrong. Please reload the page";

  } catch (error){
        console.error(error);
  }
});


  