let links = document.querySelectorAll(".close");

links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos - case sensitive
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        //Quitar animaciones
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
        //Agregar animaciones de salida
        content.classList.add("fadeOutUp");
        content.classList.add("animated");
        setTimeout(function () {
            location.href = "/";
        },1000)

        return false;
    })
});
