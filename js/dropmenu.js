function dropmenu() {
    document.getElementById("kurulum").classList.add("show");
    document.getElementById("kurulum-side").classList.add("show");
    document.getElementById("giris").classList.remove("show");
    document.getElementById("giris-side").classList.remove("show");
    document.getElementById("giris").classList.add("hidden");
    document.getElementById("giris-side").classList.add("hidden");

}

function dropmenu_giris() {
  document.getElementById("giris").classList.add("show");
  document.getElementById("giris-side").classList.add("show");
  document.getElementById("kurulum").classList.remove("show");
  document.getElementById("kurulum").classList.add("hidden");
  document.getElementById("kurulum-side").classList.remove("show");
  document.getElementById("kurulum-side").classList.add("hidden");
}



