var tdList = document.querySelectorAll('.m-item');
var li=document.getElementById("ul").getElementsByTagName("li");
for(i = 0; i < tdList.length; i++) {
    var item = tdList[i];
    item.addEventListener('click', showMsg)
}

function showMsg(e) {
  alert(e.target.id)
  if(e.target.id=="p1"){
    if(li[0].style.color=="red"){
      li[0].style.color="black"
    }
    else{
      li[0].style.color="red"
    }
  }
  else if(e.target.id=="p2"){
    var date=new Date()
    document.getElementsByTagName("h1")[0].innerHTML=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
  }
  else if(e.target.id=="p3"){
    e.target.parentNode.classList.add("fn-active")
  }
  else if(e.target.id=="p4"){
    document.getElementById("ul").removeChild(li[7])
  }
  else if(e.target.id=="p5"){
    window.open().location.href="https://www.taobao.com/"
  }
  else if(e.target.id=="p6"){
    var newp=document.createElement("li")
    var node=document.createTextNode("p9")
    newp.appendChild(node)
    document.getElementById("ul").appendChild(newp)
  }
  else if(e.target.id=="p7"){
    document.getElementsByClassName("m-box")[0].style.width=screen.availWidth
  }
  else if(e.target.id=="p8"){

  }
}

