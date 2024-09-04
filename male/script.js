const container = document.getElementById("container");

function yes() {
    container.innerHTML = "";

    var picture = document.createElement("img");
    picture.setAttribute("src", "./peach-goma-love.gif");
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
    
    no.style.width = (currentWidth - 0.5) + 'px';
    no.style.height = (currentHeight - 0.5) + 'px';
}