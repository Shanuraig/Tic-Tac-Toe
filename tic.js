let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcon=document.querySelector(".msgcontainer");
let mesg=document.querySelector("#mesg");
let turnO= true;
let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;
const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame=()=>{
turnO=true;
enableBoxes();
msgcon.classList.add("hide");
}
const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Was Clicked!")
        if(turnO==true){
            box.classList.remove("black");
            box.innerText="O";
            turnO=false;
            box.classList.add("red");
        }
        else{
            box.classList.add("black");
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showWinner=(winner)=>{
    msgcon.innerText=winner;
    msgcon.classList.remove("hide");
    updateScores(winner);
};
const checkWinner=()=>{
    for(pattern of winpattern){
        let p1v=boxes[pattern[0]].innerText;
        let p2v=boxes[pattern[1]].innerText;
        let p3v=boxes[pattern[2]].innerText;
        if(p1v!="" && p2v!="" && p3v!=""){
            if(p1v===p2v && p2v===p3v){
                console.log("The Winner is : ",p1v);
                showWinner(`Congratulations , the winner is ${p1v}`);
                disableAllBoxes();
            }
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        console.log("Match Draw!");
        showWinner("Match Draw!");
    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
