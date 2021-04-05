var currentTime = moment().hour();

$(document).ready(function(){
  //ADDING CURRENT DAY AT THE TOP OF THE PAGE
  var currentDay = $('#currentDay')
  currentDay.text(moment().format('MMMM DD'))
  
  //GETTING THE CONTAINER//
  var container = $('.container')

  //THIS IS TO GET THE STRUCTURE OF A ROW FOR THE AMOUNT OF HOURS//
  for (let hours = 8; hours <= 17; hours++) {
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
  var content = $('textarea')
    if(hours  < currentTime){
      $(content).addClass('past')
      $(content).removeClass('future')
      $(content).removeClass('present')
    }
    if(hours === currentTime){
      $(content).removeClass('past')
      $(content).addClass('future')
      $(content).removeClass('present')
    }
    if(hours > currentTime){
      $(content).removeClass('past')
      $(content).removeClass('future')
      $(content).addClass('present')
    }

  //SAVE BUTTON//
  var button = $('<button>')
  button.addClass('saveBtn col col-lg-2')
  row.append(button)

  //CURRENT TIME//


  //MAKING THE SAVED CONTENT APPEAR AFTER REFRESH//
  

  //MAKING THE BUTTON SAVE THE USERS CONTENT TO LOCAL STORAGE//
  button.on("click", function(){
    var userText = $('#description').val()
    localStorage.setItem(hours, userText)
    console.log(userText)
    userInput.hours = localStorage.getItem(hours, userText)
  })
  }
})





