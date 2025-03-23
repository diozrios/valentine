function getParametro(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

const genere = getParametro("genere");
const container = document.getElementById("container");

if (genere === "m") {
    document.getElementById("domanda").innerHTML = "Vuoi essere il mio Valentino? 💞";
}

function yes() {
    container.innerHTML = "";

    var picture = document.createElement("img");
    picture.setAttribute("src", "./images/peach-goma-love.gif");
    container.appendChild(picture);
    
    var testo = document.createElement("p");
    testo.innerHTML = "💘🥰❤️‍🔥💞 Daje 😍💖💗💌";
    container.appendChild(testo);
}

function no() {
    var yes = document.getElementById('yes');
    var currentWidth = parseInt(window.getComputedStyle(yes).getPropertyValue('width'));
    var currentHeight = parseInt(window.getComputedStyle(yes).getPropertyValue('height'));
    
    yes.style.width = (currentWidth + 15) + 'px';
    yes.style.height = (currentHeight + 15) + 'px';

    var no = document.getElementById('no');
    var currentWidth = parseInt(window.getComputedStyle(no).getPropertyValue('width'));
    var currentHeight = parseInt(window.getComputedStyle(no).getPropertyValue('height'));
    
    no.style.width = (currentWidth - 0.1) + 'px';
    no.style.height = (currentHeight - 0.1) + 'px';
}