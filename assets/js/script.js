let now = dayjs().format('dddd, MMMM D')
let hour = dayjs().hour()
let saveBtn = $('.saveBtn')
let storage = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']

let current = $(`#hour-${hour}`)
let after = hour + 1
let before = hour - 1

$(function () {

  //Add date to the top of the page
  $("#currentDay").append(now)

  //Add local Storage
    $(`#${storage[0]}`).children('input').val(localStorage.getItem(`${storage[0]}`))

    $(`#${storage[1]}`).children('input').val(localStorage.getItem(`${storage[1]}`))
    
    $(`#${storage[2]}`).children('input').val(localStorage.getItem(`${storage[2]}`))
    
    $(`#${storage[3]}`).children('input').val(localStorage.getItem(`${storage[3]}`))
    
    $(`#${storage[4]}`).children('input').val(localStorage.getItem(`${storage[4]}`))
    
    $(`#${storage[5]}`).children('input').val(localStorage.getItem(`${storage[5]}`))
    
    $(`#${storage[6]}`).children('input').val(localStorage.getItem(`${storage[6]}`))
    
    $(`#${storage[7]}`).children('input').val(localStorage.getItem(`${storage[7]}`))
    
    $(`#${storage[8]}`).children('input').val(localStorage.getItem(`${storage[8]}`))

//Save text input to Local Storage
  saveBtn.on('click', function(event) {
    event.preventDefault()
    
    localStorage.setItem($(this).parent().attr('id'), $(this).parent().children('input').val())
    })
  
//Add color for current hour
  current.addClass('present')

//Add color for future hours. 17 = 5PM
  for(after; after <= 17; after++) {
    $(`#hour-${after}`).addClass('future')
  }

//Add color for past hours. 9 = 9AM
  for(before; before >= 9; before--) {
    $(`#hour-${before}`).addClass('past')
  }
});
