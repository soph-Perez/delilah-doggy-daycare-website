/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35; //full day is default
let dayCounter = 0;

const clearButton = document.getElementById("clear-button");

const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");

const costOutput = document.getElementById("calculated-cost");

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* Extra*********/
// I added an option to unselect cus I was tired of always resetting after misclicks. It lets the user unselect days, taking the price change into account
function dayIsClick(day){
  if(day.classList.contains("clicked")){
    day.classList.remove("clicked");
    dayCounter -= 1;
  } else {
    day.classList.add("clicked");
    dayCounter += 1;
  }
  updateCost();
}

monday.addEventListener("click", () => dayIsClick(monday));
tuesday.addEventListener("click", () => dayIsClick(tuesday));
wednesday.addEventListener("click", () => dayIsClick(wednesday));
thursday.addEventListener("click", () => dayIsClick(thursday));
friday.addEventListener("click", () => dayIsClick(friday));

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays(){
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");

  dayCounter = 0;
  updateCost();
}

clearButton.addEventListener("click", clearDays)

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDaySelected() {
  dailyRate = 20;
  fullButton.classList.remove("clicked")
  halfButton.classList.add("clicked")
  updateCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDaySelected() {
  dailyRate = 35;
  halfButton.classList.remove("clicked")
  fullButton.classList.add("clicked")
  updateCost();
}

halfButton.addEventListener("click", halfDaySelected);
fullButton.addEventListener("click", fullDaySelected);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateCost(){
  costOutput.textContent = dayCounter*dailyRate;
}

