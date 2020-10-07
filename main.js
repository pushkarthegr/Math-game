player1_name = "";
player2_name = "";

function next(){
    player1_name = document.getElementById("input1").value;
    player2_name = document.getElementById("input2").value;

    if(player1_name == ""){
        document.getElementById("error").innerHTML = "type your name first";
    }else if(player2_name == ""){
        document.getElementById("error").innerHTML = "type your name first";
    }else{
        localStorage.setItem("math1",player1_name);
        localStorage.setItem("math2",player2_name);

            
        window.location = "index2.html";
    }
}