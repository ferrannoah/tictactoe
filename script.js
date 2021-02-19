var board = [0,1,2,3,4,5,6,7,8];
var player1 = [];
var player2 = [];
var usedSquares = [];
var winningAllignments = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
var turn = 0;
var currentPlayer = "x";
var squares = [document.getElementById("box0"),document.getElementById("box1"),document.getElementById("box2"),document.getElementById("box3"),document.getElementById("box4"),document.getElementById("box5"),document.getElementById("box6"),document.getElementById("box7"),document.getElementById("box8")];
var winScreen = document.getElementById("winner");




function javaCheck(playerArr, winningAllignment){
    list = [false,false,false];
    for(x in playerArr){
        for(i in winningAllignment){
            if(playerArr[x] == winningAllignment[i])
                list[i] = true;
        }
    }
    if(list.indexOf(false) > -1)
        return false;
    return true;
}

function checkWin(playerArr){
    for(intArr in winningAllignments){
        if(javaCheck(playerArr,winningAllignments[intArr])){
            return true;
        }
    }
    return false;
}

function play(number){
    turn ++;
    currentPlayer = (turn % 2 > 0) ? "x" : "o";
    squares[number].appendChild(getNode(currentPlayer));
    //draw x or o to square --- 
    board.splice(board.indexOf(number),1);
    if(currentPlayer == "x")
        player1.push(number);
    else
        player2.push(number);
    // take num out of board at it to respective player
    if(checkWin(currentPlayer == "x" ? player1:player2)){

        winScreen.innerHTML = currentPlayer.toUpperCase() + " WON!";
    }
    //checkwin

}

function printWin(){
    
}

function press(number){
    if(board.indexOf(number) > -1){
        play(number);
    }
}

function getNode(str){
    var x = document.createElement('p');
    x.id = "X";
    x.innerHTML = "x";
    var o = document.createElement('p');
    o.id = "circle";
    if(str == "x"){
        return x;
    }
    return o;
}
