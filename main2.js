document.getElementById("player1").innerHTML = localStorage.getItem("math1")+" : ";
document.getElementById("player2").innerHTML = localStorage.getItem("math2")+" : ";
player_1 = localStorage.getItem("math1");
player_2 = localStorage.getItem("math2");
score1 = 0;
score2 = 0;
check = 0;
document.getElementById("question_turn").innerHTML = "The question turn is of "+player_1;
document.getElementById("answer_turn").innerHTML = "The answer turn is of "+player_2;
function add(){
    number1 = Number(document.getElementById("number_1").value);
    number2 = Number(document.getElementById("number_2").value);
    if(number1 == ""){

    }else if(number2 == ""){

    }else{
        document.getElementById("displayer").style.display="block";
        check = number1 + number2;
        console.log(check);
        document.getElementById("question").innerHTML = number1+" + "+number2;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
    }
    document.getElementById("final").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("displayer").style.display = "block";
}
function sub(){
    number1 = Number(document.getElementById("number_1").value);
    number2 = Number(document.getElementById("number_2").value);
    if(number1 == ""){

    }else if(number2 == ""){

    }else{
        document.getElementById("displayer").style.display="block";
        check = number1 - number2;
        console.log(check);
        document.getElementById("question").innerHTML = number1+" - "+number2;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
    }
    document.getElementById("final").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("displayer").style.display = "block";
}
function mul(){
    number1 = Number(document.getElementById("number_1").value);
    number2 = Number(document.getElementById("number_2").value);
    if(number1 == ""){

    }else if(number2 == ""){

    }else{
        document.getElementById("displayer").style.display="block";
        check = number1 * number2;
        console.log(check);
        document.getElementById("question").innerHTML = number1+" x "+number2;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
    }
    document.getElementById("final").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("displayer").style.display = "block";
}
function div(){
    number1 = Number(document.getElementById("number_1").value);
    number2 = Number(document.getElementById("number_2").value);
    if(number1 == ""){

    }else if(number2 == ""){

    }else{
        document.getElementById("displayer").style.display="block";
        check = number1 / number2;
        console.log(check);
        document.getElementById("question").innerHTML = number1+" ÷ "+number2;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
    }
    document.getElementById("final").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("displayer").style.display = "block";
}

question_turn = "player1";
answer_turn = "player2";

function check1(){
    get = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    if(get == check){
        if(answer_turn == "player1"){
            score1 = score1+1;
            document.getElementById("score1").innerHTML = score1;
        }
        else{
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;
        }
        document.getElementById("show").innerHTML = "Good Job";
    }
    else{
        document.getElementById("show").innerHTML = "Hey better luck next time."
    }
    if(answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("answer_turn").innerHTML = "The answer turn is of "+player_1;
    }
    else{
        answer_turn = "player2";
        document.getElementById("answer_turn").innerHTML = "The answer turn is of "+player_2;
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "The question turn is of "+player_2;
    }
    else{
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "The question turn is of "+player_1;
    }
    document.getElementById("answer").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("displayer").style.display = "none";
}