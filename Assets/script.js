var currentTime = moment().hour();


$(document).ready(function(){
  //ADDING CURRENT DAY AT THE TOP OF THE PAGE
  var currentDay = $('#currentDay')
  currentDay.text(moment().format('dddd, Do of MMMM'))
  
  //GETTING THE CONTAINER//
  var container = $('.container')

  //THIS IS TO GET THE STRUCTURE OF A ROW FOR THE AMOUNT OF HOURS//
  for (let hours = 10; hours <= 29; hours++) {
  var row = $('<div>')
  row.addClass('row')
  container.append(row)
  
  //THIS MAKES THE TEXT IN THE HOUR SECTIONS REPRESENT THE RIGHT TIME//
  var hour = $('<div>')
  hour.addClass('hour col col-lg-2')
  hour.text(hours + ":00AM")
  if(hours === 12){
    hour.text(hours + ":00PM")
  }
  if (hours > 12){
    hour.text(hours -12 + ":00PM")
  }
  
  row.append(hour)

  //THIS IS THE TEXT AREA//
  var userInput = $('<textarea>')
  userInput.addClass('col').attr('id', 'description')
  row.append(userInput)

  //FOR THE CHANGING COLOURS//

    if(hours  < currentTime){
      $(userInput).addClass('past')
      $(userInput).removeClass('present')
      $(userInput).removeClass('future')
    }
    if(hours === currentTime){
      $(userInput).removeClass('past')
      $(userInput).addClass('present')
      $(userInput).removeClass('future')
    }
    if(hours > currentTime){
      $(userInput).removeClass('past')
      $(userInput).removeClass('present')
      $(userInput).addClass('future')
    }
  


  //SAVE BUTTON//
  var button = $('<button>')
  button.addClass('saveBtn col col-lg-2')
  row.append(button)

  //CURRENT TIME//
  var icon = $('<i>')
  icon.addClass('save Btn fas fa-save')
  button.append(icon)

  //MAKING THE SAVED CONTENT APPEAR AFTER REFRESH//
  

  //MAKING THE BUTTON SAVE THE USERS CONTENT TO LOCAL STORAGE//
  button.on("click", function(){

    var userText = $('#description').val()
    localStorage.setItem(hours, userText)
    var Element = document.getElementById("description")
    Element.style.color = "Black"
    
    $(Element).textContent = localStorage.getItem(hours)
    console.log(Element)
    console.log(hours)
    console.log(currentTime)
    console.log(userText)
    console.log(localStorage.getItem(hours))
  })

  } 


    
 
});








