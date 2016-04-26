function cambioVisible(idbloque) {
    var panel = document.getElementById(idbloque);
    if(panel.style.display == "block")
        panel.style.display = "none";
    else
        panel.style.display = "block";
}
