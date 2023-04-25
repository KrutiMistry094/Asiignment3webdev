/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costperday = 35;
var bussinessDays = [document.getElementById("monday"),document.getElementById("tuesday"), document.getElementById("wednesday"), document.getElementById("thursday"), document.getElementById("friday")];
let totalCost = 0;
var halfDays = document.getElementById("half");
var fullDays = document.getElementById("full");
var clearButton = document.getElementById("clear-button");
var daysSelected = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function clicked(day){
    if(!day.classList.contains("clicked")){
        day.classList.add("clicked");
        daysSelected += 1;
        ServiceCost();
    }
}
bussinessDays[0].addEventListener("click",function(){
    clicked(bussinessDays[0]);
});
bussinessDays[1].addEventListener("click",function(){
    clicked(bussinessDays[1]);
});
bussinessDays[2].addEventListener("click",function(){
    clicked(bussinessDays[2]);
});
bussinessDays[3].addEventListener("click",function(){
    clicked(bussinessDays[3]);
});
bussinessDays[4].addEventListener("click",function(){
    clicked(bussinessDays[4]);
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function reset(){
    for(var i = 0; i < bussinessDays.length; i++){
        bussinessDays[i].classList.remove("clicked");
    }
    daysSelected = 0;
    ServiceCost();
}
clearButton.addEventListener('click',reset);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function servicehalfday(){
    costperday = 20;
    ServiceCost();
    halfDays.classList.add("clicked");
    fullDays.classList.remove("clicked");
}
halfDays.addEventListener("click", servicehalfday);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function servicefullday(){
    costperday = 35;
    ServiceCost();
    fullDays.classList.add("clicked");
    halfDays.classList.remove("clicked");
}
fullDays.addEventListener("click", servicefullday);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function ServiceCost(){
    // let totalCost = document.getElementById("calculated-cost");
    // totalCost.innerHTML = costperday *bussinessDays;
    var totalCost = costperday * daysSelected;
    var cost = document.getElementById("calculated-cost");
    cost.innerHTML = totalCost

}