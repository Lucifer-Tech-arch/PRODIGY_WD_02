let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let win = new Audio("win.mp3");
let press = new Audio("press.mp3");
let turnO = true;  //playerX or playerO

const winpatters = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked");
        press.play();

        if (turnO == true) {          //playerO turn
            btn.innerText = "O"
            turnO = false;
        }
        else {
            btn.innerText = "X";        //playerX turn
            turnO = true;
        }
        btn.disabled = true;
        cheakwinner();
    });
});
const showwinner = (Winner) => {
    msg.innerText = `Congratulations ! Winner is ${Winner}`;
    msg.classList.remove("hide");
}


const cheakwinner = () => {
    for (let pattern of winpatters) {
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner!", pos1val);
                win.play();
                btns[pattern[0]].style.backgroundColor = "rgb(128, 223, 255)";
                btns[pattern[1]].style.backgroundColor = "rgb(128, 223, 255)";
                btns[pattern[2]].style.backgroundColor = "rgb(128, 223, 255)";
                showwinner(pos1val);
                btns.forEach((btn)=> {
                   btn.disabled = true;
                })
                break;
            }
        }
       
    }
};

reload();
function reload() {
    resetbtn.addEventListener("click", () => {
        window.location.reload();
    })
}