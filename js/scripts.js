

$(function(){
  $('button').click(function(){
    var userTarget = parseInt($('#target').val())
    var userJump = Math.abs(parseInt($('#jump').val()))
    var valid = true
    if (isNaN(userTarget)) {
      flashError("#target","Please enter a number")
      valid = false
    }
    if (isNaN(userJump)) {
      flashError("#jump","Please enter a number")
      valid = false
    }
    if (userTarget === 0) {
      flashError("#target","You can't count to zero")
      valid = false
    }
    if (userJump === 0) {
      flashError("#jump","You can't count by zeroes")
      valid = false
    }
    if (userJump > Math.abs(userTarget)) {
      flashError("#jump","Must be smaller than number above")
      valid = false
    }
    if (valid) {
      console.log("valid")
      appendToDisplay(userTarget,userJump)
      slideResultUp()
    }
  })
})
function flashError(element,errorMessage) {
  var oldPlaceholder = "Bigger Number"
  if (element === "#jump") {
    oldPlaceholder = "Smaller Number"
  }
  $(element).val("")
  $(element).attr({
    'placeholder':errorMessage,
  })
  $(element).css({
    'background-color':'#fbb'
  })
  setTimeout(function(){
    $(element).css({
      'background-color':'#fff'
    })
    setTimeout(function(){
      $(element).css({
        'background-color':'#fbb'
      })
      setTimeout(function(){
        $(element).css({
          'background-color':'#fff'
        })
        setTimeout(function(){
          $(element).attr({
            'placeholder':oldPlaceholder
          })
        }, 2000)
      },100)
    },100)
  },100)
}
function appendToDisplay(userTarget,userJump) {
  $('#sequence').html('')
  if (userTarget > 0) {
    for (var i=userJump;i<=userTarget;i+=userJump) {
      var appendage = i + ", "
      if (i+userJump > userTarget) {
        appendage = i
      }
      $('#sequence').append(appendage)
    }
  } else {
    userJump *= -1
    for (var i=userJump;i>=userTarget;i+=userJump) {
      var appendage = i + ", "
      if (i+userJump < userTarget) {
        appendage = i
      }
      $('#sequence').append(appendage)
    }
  }
}
function slideResultUp() {
  $('#display').css({
    'transform':'translateY(0px) scaleX(1) scaleY(1)',
    'opacity':1
  })
}
