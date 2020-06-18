var player = document.getElementById("roll").innerText
var count=0
console.log(player)
function playerTurn(){
    if(player=="Player-1 Roll"){
        player="Player-2 Roll"
    }
    else{
        player = "Player-1 Roll"
    }
    document.getElementById("roll").innerText=player
    count=count+10
}

function checkCount(count){
    if(count==50){
        alert("You win")
    }
}

window.addEventListener('load',function(){
    var btn=document.getElementById("roll")
    btn.addEventListener('click',playerTurn)
})