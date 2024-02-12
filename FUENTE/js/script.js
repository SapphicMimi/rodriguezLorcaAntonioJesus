function goToSlide(numID) {
    let button = document.getElementById("anime-button-" + `${numID}`);
    let imgOcul = document.getElementById("img"+`${numID}`);
    let tituOcul = document.getElementById("titu"+`${numID}`);
    let descOcul = document.getElementById("desc"+`${numID}`);

    let imgMost = document.getElementsByClassName("carrousel-slide");
    let tituMost = document.getElementsByClassName("center");
    let butpink = document.getElementsByClassName("boton-pink");
    let descMost = document.getElementsByClassName("description");

    for(let but of butpink) {
        if(!(but == button)) {
            button.classList.remove("boton");
            button.classList.add("boton-pink");

            but.classList.remove("boton-pink");
            but.classList.add("boton");
        }
    }

    for(let desc of descMost) {
        if(!(desc == descOcul)) {
            descOcul.classList.remove("ocultacion");
            descOcul.classList.add("description");

            desc.classList.remove("description");
            desc.classList.add("ocultacion");
        }
    }

    for(let titu of tituMost) {
        if(!(titu == tituOcul)) {
            tituOcul.classList.remove("ocultacion");
            tituOcul.classList.add("center");

            titu.classList.remove("center");
            titu.classList.add("ocultacion");
        }
    }

    for(let img of imgMost) {
        if(!(img == imgOcul)) {
            imgOcul.classList.remove("ocultacion");
            
            img.classList.add("ocultacion");
        }
    }
}