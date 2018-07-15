const buttons = Array.from(document.getElementsByClassName("c_button"));
const contents = Array.from(document.getElementsByClassName("menu-content-normal"));

for (var i in buttons) {

    buttons[i].addEventListener("click", function() {
        var content_id = this.getAttribute("data-content");

        for (var j in contents) {
            contents[j].classList.add("hidden");
            contents[j].classList.remove("show");
        }

        if (content_id == "kurulum") {
          document.getElementById("kurulum-side").classList.add("show");
          document.getElementById("kurulum").classList.add("show");
          document.getElementById("kurulum-side").classList.remove("hidden");
          document.getElementById("kurulum").classList.remove("hidden");
        } else if (content_id == "giris") {
          document.getElementById("giris-side").classList.add("show");
          document.getElementById("giris").classList.add("show");
          document.getElementById("giris-side").classList.remove("hidden");
          document.getElementById("giris").classList.remove("hidden");
        } else if (content_id == "sablon") {
          document.getElementById("sablon-side").classList.add("show");
          document.getElementById("sablon").classList.add("show");
          document.getElementById("sablon-side").classList.remove("hidden");
          document.getElementById("sablon").classList.remove("hidden");
        } else if (content_id == "ornek") {
          document.getElementById("ornek-side").classList.add("show");
          document.getElementById("ornek").classList.add("show");
          document.getElementById("ornek-side").classList.remove("hidden");
          document.getElementById("ornek").classList.remove("hidden");
        } else if (content_id == "CPM") {
          document.getElementById("CPM-side").classList.add("show");
          document.getElementById("CPM").classList.add("show");
          document.getElementById("CPM-side").classList.remove("hidden");
          document.getElementById("CPM").classList.remove("hidden");
        } else if (content_id == "SSB") {
          document.getElementById("SSB-side").classList.add("show");
          document.getElementById("SSB").classList.add("show");
          document.getElementById("SSB-side").classList.remove("hidden");
          document.getElementById("SSB").classList.remove("hidden");
        } else if (content_id == "Kosullu") {
          document.getElementById("Kosullu-side").classList.add("show");
          document.getElementById("Kosullu").classList.add("show");
          document.getElementById("Kosullu-side").classList.remove("hidden");
          document.getElementById("Kosullu").classList.remove("hidden");
        } else if (content_id == "Liste") {
          document.getElementById("Liste-side").classList.add("show");
          document.getElementById("Liste").classList.add("show");
          document.getElementById("Liste-side").classList.remove("hidden");
          document.getElementById("Liste").classList.remove("hidden");
        } else if (content_id == "olay-isleme") {
          document.getElementById("olay-side").classList.add("show");
          document.getElementById("olay").classList.add("show");
          document.getElementById("olay-side").classList.remove("hidden");
          document.getElementById("olay").classList.remove("hidden");
        } else if (content_id == "guide") {
          document.getElementById("kurulum-side").classList.add("show");
          document.getElementById("kurulum").classList.add("show");
          document.getElementById("kurulum-side").classList.remove("hidden");
          document.getElementById("kurulum").classList.remove("hidden");
        }
    });
}