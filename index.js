
$("button").on("click",function(){
    var randomNumber1=Math.floor(Math.random()*6+1)
    var randomNumber2=Math.floor(Math.random()*6+1)

    $(".image1 img").attr("src","./images/dice"+randomNumber1+".png")
    $(".image2 img").attr("src","./images/dice"+randomNumber2+".png")

    if(randomNumber1>randomNumber2){
        $("h1").html("&#127988 Player1 Wins")
    }
    else if(randomNumber1<randomNumber2){
        $("h1").html("Player2 Wins &#127988")
    }
    else{
        $("h1").html("Draw")
    }
})