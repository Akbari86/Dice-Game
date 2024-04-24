function rollTheDice() {
  
    const d = new Date().toISOString();

    document.querySelector('.day').innerHTML = d;
    

    var Num1 = Math.floor(Math.random() * 6) + 1;
    var Num2 = Math.floor(Math.random() * 6) + 1;
    
document.querySelector('.img2').setAttribute("src", "dice-" + Num2 + ".svg");

    document.getElementById('img1').setAttribute("src", "dice-" + Num1 + ".svg");
    document.querySelector('.total1').innerHTML = Num1 + Num2;

    if (Num1 + Num2 > 8) {
        document.querySelector('.result').innerHTML = "You win: Try Again"


    }
    if (Num1 + Num2 < 8) {
        document.querySelector('.result').innerHTML = "You did not win: Try Again"


    }
    if (Num1 + Num2 == 8) {
        document.querySelector('.result').innerHTML = "Draw: Try Again"


    }
}


