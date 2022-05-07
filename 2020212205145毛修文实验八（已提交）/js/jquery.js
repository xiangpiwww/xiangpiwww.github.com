<!-- 函数指针方法 -->
function ini(){
  var n=$('.m-tbox').children('div').length
  for(var i=0;i<n;i++){
    $('.u-line').eq(i).find('span:first').text(i+1)
  }
}

$(init) 
function init() {
  $('.u-big').hide()
  $('.m-first').show()
  $('.m-second').hide()
  $('.m-third').hide()
  $('.m-sbox').on('click','img',function(){
    $('.m-mn').css('opacity','0.2')
    var a=$(this).attr('src')
    $('.u-big').css('content','url('+a+')')
    $('.u-big').css('width','400px')
    $('.u-big').css('height','400px')
    $('.u-big').css('z-index','99')
    $('.u-big').show(1000)
    
  })

  $('body').on('click','.u-big',function(){
    $('.m-mn').css('opacity','1')
    $('.u-big').hide(1000)
  })

  $('.m-tl').on('click','button',function(){
    if($(this).text()=='first'){
      $('.m-first').show()
      $('.m-second').hide()
      $('.m-third').hide()
    }
    else if($(this).text()=='second'){
      $('.m-first').hide()
      $('.m-second').show()
      $('.m-third').hide()
    }
    else if($(this).text()=='third'){
      $('.m-first').hide()
      $('.m-second').hide()
      $('.m-third').show()
    }
  })

  $('.u-line').on('click','button',function(){ 
    $(this).parent().remove()
    ini()
  })

  $('.add').on('click','button',function(){
    var x=parseInt($('.u-line:last').find('span:first').text())
    if(isNaN(x)) {
      x=1
    }
    else {
      x+=1
    }
    $('.m-tbox').append('<div><span>'+x+'</span><span></span>'+
      '<button>delete</button></div>')
    $('.m-tbox').children('div:last').addClass('u-line')
    $('.u-line:last').find('span:last').addClass('long')

    $('.u-line').on('click','button',function(){ 
      $(this).parent().remove()
      ini()
    })
  })

  

}
