var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var text = this.nextElementSibling;
        if (text.style.display == "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    }
}