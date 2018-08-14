

$(function(){
  $('button').click(function(){
    var userTarget = parseInt($('#target').val())
    var userJump = parseInt($('#jump').val())
    var valid = true
    if (isNaN(userTarget)) {
      flashError("#target")
      valid = false
    }
    if (isNaN(userJump)) {
      flashError("#jump")
      valid = false
    }
    if (valid) {
      appendToDisplay(userJump,userTarget)
      slideResultUp()
    }
  })
})
function flashError(element) {
  $(element).val("")
  $(element).attr({
    'placeholder':'Please enter a number',
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
      },100)
    },100)
  },100)
}
function appendToDisplay(userJump,userTarget) {
  $('#sequence').html('')
  for (var i=userJump;i<=userTarget;i+=userJump) {
    var appendage = i + ", "
    if (i+userJump >= userTarget) {
      appendage = i
    }
    $('#sequence').append(appendage)
  }
}
function slideResultUp() {
  $('#display').css({
    'transform':'translateY(0px) scaleX(1) scaleY(1)',
    'opacity':1
  })
}
