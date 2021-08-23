var estadolicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoslicuadora = document.getElementById("blender-sound")
var botonlicuadora = document.getElementById("blender-button-sound")


function controlarlicuadora(){
    if (estadolicuadora === "apagada"){
        estadolicuadora = "encidida";
        hacerruido();
        licuadora.classList.add("active");
        // console.log("me prendiste");
    } else {
        estadolicuadora = "apagada"
        hacerruido();
        licuadora.classList.remove("active");
        // console.log("me apagaste");
    }
}

function hacerruido(){
    if (sonidoslicuadora.paused){
        botonlicuadora.play();
        sonidoslicuadora.play();
    } else {
        botonlicuadora.play();
        sonidoslicuadora.pause();
        sonidoslicuadora.currentTime= 0;
    }
}