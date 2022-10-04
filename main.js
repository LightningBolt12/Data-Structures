var games=[];

function sumbit()  {
    var game1=document.getElementById("game_1").value ;
    var game2=document.getElementById("game_2").value ;
    var game3=document.getElementById("game_3").value ;
    var game4=document.getElementById("game_4").value ;

    games.push(game1);
    games.push(game2);
    games.push(game3);
    games.push(game4);

    document.getElementById("display").innerHTML=games;
    document.getElementById("sumbit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()  {
    games.sort();
    document.getElementById("display").innerHTML=games;
}



