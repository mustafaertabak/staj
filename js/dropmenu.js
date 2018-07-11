function dropmenu() {
    document.getElementById("kurulum").classList.add("show");
    document.getElementById("kurulum-side").classList.add("show");
    document.getElementById("giris").classList.remove("show");
    document.getElementById("giris-side").classList.remove("show");
    document.getElementById("giris").classList.add("hidden");
    document.getElementById("giris-side").classList.add("hidden");
    document.getElementById("ornek").classList.remove("show");
    document.getElementById("ornek").classList.add("hidden");
    document.getElementById("ornek-side").classList.remove("show");
    document.getElementById("ornek-side").classList.add("hidden");
    document.getElementById("sablon").classList.remove("show");
    document.getElementById("sablon").classList.add("hidden");
    document.getElementById("sablon-side").classList.remove("show");
    document.getElementById("sablon-side").classList.add("hidden");
}

function dropmenu_giris() {
  document.getElementById("giris").classList.add("show");
  document.getElementById("giris-side").classList.add("show");
  document.getElementById("kurulum").classList.remove("show");
  document.getElementById("kurulum").classList.add("hidden");
  document.getElementById("kurulum-side").classList.remove("show");
  document.getElementById("kurulum-side").classList.add("hidden");
  document.getElementById("ornek").classList.remove("show");
  document.getElementById("ornek").classList.add("hidden");
  document.getElementById("ornek-side").classList.remove("show");
  document.getElementById("ornek-side").classList.add("hidden");
  document.getElementById("sablon").classList.remove("show");
  document.getElementById("sablon").classList.add("hidden");
  document.getElementById("sablon-side").classList.remove("show");
  document.getElementById("sablon-side").classList.add("hidden");
}

function dropmenu_ornek() {
  document.getElementById("ornek").classList.add("show");
  document.getElementById("ornek-side").classList.add("show");
  document.getElementById("kurulum").classList.remove("show");
  document.getElementById("kurulum").classList.add("hidden");
  document.getElementById("kurulum-side").classList.remove("show");
  document.getElementById("kurulum-side").classList.add("hidden");
  document.getElementById("giris").classList.remove("show");
  document.getElementById("giris").classList.add("hidden");
  document.getElementById("giris-side").classList.remove("show");
  document.getElementById("giris-side").classList.add("hidden");
  document.getElementById("sablon").classList.remove("show");
  document.getElementById("sablon").classList.add("hidden");
  document.getElementById("sablon-side").classList.remove("show");
  document.getElementById("sablon-side").classList.add("hidden");
}
function dropmenu_sablon() {
  document.getElementById("sablon").classList.add("show");
  document.getElementById("sablon-side").classList.add("show");
  document.getElementById("kurulum").classList.remove("show");
  document.getElementById("kurulum").classList.add("hidden");
  document.getElementById("kurulum-side").classList.remove("show");
  document.getElementById("kurulum-side").classList.add("hidden");
  document.getElementById("giris").classList.remove("show");
  document.getElementById("giris").classList.add("hidden");
  document.getElementById("giris-side").classList.remove("show");
  document.getElementById("giris-side").classList.add("hidden");
  document.getElementById("ornek").classList.remove("show");
  document.getElementById("ornek").classList.add("hidden");
  document.getElementById("ornek-side").classList.remove("show");
  document.getElementById("ornek-side").classList.add("hidden");
}



/*
$(document).ready(function(){
  $('.sidebar-link').click(function(){
      var yeniid = $(this).attr('id');
      var cizgi = yeniid.indexOf("-");
      var showid = yeniid.substring(0,cizgi);
      document.querySelector(showid).classList.add("show");
  });
});
*/