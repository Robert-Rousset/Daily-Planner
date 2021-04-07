var currentTime = moment().hour();

$(document).ready(function(){
  //ADDING CURRENT DAY AT THE TOP OF THE PAGE
  var currentDay = $('#currentDay')
  currentDay.text(moment().format('dddd, Do of MMMM'))
  
  //GETTING THE CONTAINER//
  var container = $('.container')

  //THIS IS TO GET THE STRUCTURE OF A ROW FOR THE AMOUNT OF HOURS//
  for (let hour24 = 8; hour24 <= 17; hour24++) {
    var row = $('<div>')
    row.addClass('row')
    container.append(row)
    
    //THIS MAKES THE TEXT IN THE HOUR SECTIONS REPRESENT THE RIGHT TIME//
    var hourAMPM = $('<div>')
    hourAMPM.addClass('hour col-2')
    hourAMPM.text(hour24 + ":00AM")
    if(hour24 === 12){
      hourAMPM.text(hour24 + ":00PM")
    }
    if (hour24 > 12){
      hourAMPM.text(hour24 -12 + ":00PM")
    }
    row.append(hourAMPM);

    //THIS IS THE TEXT AREA//
    var userInput = $('<textarea>');
    userInput.addClass('col-9');
    row.append(userInput);
    //MAKING THE SAVED CONTENT APPEAR AFTER REFRESH//
    userInput.val(localStorage.getItem(hour24));

    //FOR THE CHANGING COLOURS//
    if(hour24 < currentTime){
      userInput.addClass('past')
    }
    if(hour24 === currentTime){
      userInput.addClass('present')
    }
    if(hour24 > currentTime){
      userInput.addClass('future')
    }
    //SAVE BUTTON//
    var button = $('<button>')
    button.addClass('saveBtn col-1')
    row.append(button)

    //CURRENT TIME//
    var icon = $('<i>')
    icon.addClass('save Btn fas fa-save')
    button.append(icon)

    //MAKING THE BUTTON SAVE THE USERS CONTENT TO LOCAL STORAGE//
    button.on("click", function(event){
      event.preventDefault();
      var savebtn = event.currentTarget;
      var row = savebtn.closest('.row');
      var textarea = row.children[1];
      var userText = textarea.value;
      localStorage.setItem(hour24, userText)
    })
  } 
});