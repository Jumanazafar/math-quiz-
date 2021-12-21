player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_ques").innerHTML="Question turn- "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn- "+player2_name;
function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    actualans=parseInt(num1)*parseInt(num2);
    question_word = "<h4 id='word_display'> Q. "+num1 +" X "+num2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==actualans)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;   
        }
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer turn- "+player2_name;

    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer turn- "+player1_name;  
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_ques").innerHTML="Question turn- "+player2_name;

    }
    else
    {
        question_turn="player1";
        document.getElementById("player_ques").innerHTML="Question turn- "+player1_name;  
    }
document.getElementById("output").innerHTML="";
}