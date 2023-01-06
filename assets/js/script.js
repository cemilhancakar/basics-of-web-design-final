function openNav() {
  document.getElementById("YanMenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("YanMenu").style.width = "0";
}

var baslik=document.title;
var yeniBaslik="Geri Dön Lütfen :(";

window.onblur = function(){
  document.title=yeniBaslik;
}
window.onfocus=function(){
  document.title=baslik;
}