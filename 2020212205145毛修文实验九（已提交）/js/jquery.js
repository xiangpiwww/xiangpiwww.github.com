<!-- 函数指针方法 -->
$(init) 
function init() {
  $('.m-first').show()
  $('.m-second').hide()

  $('.m-tl').on('click','button',function(){
    if($(this).text()=='first'){
      $('.m-first').show()
      $('.m-second').hide()
    }
    else if($(this).text()=='second'){
      $('.m-first').hide()
      $('.m-second').show()
      $('.m-third').hide()
    }
  })


  

}
