let huita = document.getElementById("huita")
let bulbon = document.querySelector("#bulbOn")

bulbon.onclick = (e) =>{
    console.log(e.target.src);
    if (e.target.src == "./img/bulbOff.png") {
        e.target.src = "./img/lamp-10.png"
        huita.innerHTML = "This is text. It is for text. In a word text for text"
    }
    else if(e.target.src == "./img/lamp-10.png")  {
        e.target.src = "./img/bulbOff.png"
        huita.innerHTML = "This text is work"
    }

}