var ancho = window.innerWidth / 2
var largo = window.innerHeight / 2

var jugador1 = document.getElementById("jugador1")
var jugador2 = document.getElementById("jugador2")
var jugadory = 0
var velocidad = 3

score = 0
highScore = 0

//Pelota
var pelota = document.getElementById("bola")
var pelotax = ancho / 2
var pelotay = largo / 2
var pelota_vel_x = 3
var pelota_vel_y = 3
function dificultad(value)
{
    if(value == 1)
    {
        pelota_vel_x = 4
        pelota_vel_y = 3
        velocidad = 2
    }
    else if(value == 2)
    {
        pelota_vel_x = 5
        pelota_vel_y = 4
        velocidad = 3
    }
    else
    {
        pelota_vel_x = 8
        pelota_vel_y = 7
        velocidad = 5
    }
}

var Teclas = {};   
window.addEventListener('keydown',function(e){
    Teclas[e.key] = true;
},true);    
window.addEventListener('keyup',function(e){
    Teclas[e.key] = false;
},true);

function gameLoop() {
    if (Teclas["w"] || Teclas["W"]){
        jugadory -= velocidad;
    }    
    if (Teclas["s"] || Teclas["S"]){
        jugadory += velocidad;
    }
    if(jugadory < 0)
        jugadory = 0
    if(jugadory + 150 > largo)
        jugadory = largo - 150
    jugador1.style.top = jugadory + "px"
    jugador2.style.top = jugadory + "px"




    pelotax += pelota_vel_x
    pelotay += pelota_vel_y
    if(pelotax < 5 || pelotax > ancho - 20)
    {
        if(collision())
        {
            score +=1
            document.querySelector(".currentScore").innerHTML = score
            if(score > highScore)
            {
                highScore = score
                document.querySelector(".highScore").innerHTML = score
            }
            pelota_vel_x *= -1
        }
        else
        {
            pelotax = ancho / 2
            pelotay = largo / 2
            score = 0
            document.querySelector(".currentScore").innerHTML = score
        }
    }
    if(pelotay > largo - 20 || pelotay < 0)
    {
        pelota_vel_y *= -1
    }


    pelota.style.top = pelotay + "px"
    pelota.style.left = pelotax + "px"

}
function collision()
{
    if(pelotay < jugadory + 150 && pelotay > jugadory)
        return true
    else
        return false
}

setInterval(gameLoop, 10)



// window.addEventListener("keydown", (event)=>{
//     if(event.key == "s")
//     {
//         jugadory+= 10
//     }
//     else if(event.key == "w")
//     {
//         jugadory-= 10
//     }
//     if(jugadory < 0)
//         jugadory = 0
//     jugador1.style.top = jugadory + "px"
// })



