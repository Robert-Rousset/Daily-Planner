var currentDay = document.getElementById('currentDay')
var hour = document.querySelector('.hour')
var container = document.getElementsByClassName('container')
var content = document.getElementById('description')
var saveBTN = document.querySelector('.saveBtn')
var currentTime = moment().hour();
var row = document.querySelector('.row')


currentDay.textContent = moment().format('MMMM DD')

saveBTN.addEventListener("click", function(){
  var userText = content.value;
  localStorage.setItem("dailyPlan", userText)
})

var dailyPlan = localStorage.getItem("dailyPlan")
content.textContent = dailyPlan;

function updateContentBoxColour() {
  var timeInHour = hour.textContent

  if(timeInHour < currentTime){
    $(content).addClass('past')
    $(content).removeClass('future')
    $(content).removeClass('present')
  }
  if(timeInHour == currentTime){
    $(content).removeClass('past')
    $(content).addClass('future')
    $(content).removeClass('present')
  }
  if(timeInHour > currentTime){
    $(content).removeClass('past')
    $(content).removeClass('future')
    $(content).addClass('present')
  }
}

updateContentBoxColour();

