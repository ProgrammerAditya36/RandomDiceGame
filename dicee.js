var p1;
var p2;
var dicelst = document.querySelector("h1");
p1 = Math.ceil(Math.random() * 6);
p2 = Math.ceil(Math.random() * 6);
console.log(p1, p2);
var imgp1 = 'images/dice' + p1 + '.png';
var imgp2 = 'images/dice' + p2 + '.png';
var imglst = document.querySelectorAll("img");
imglst[0].setAttribute("src", imgp1)
imglst[1].setAttribute("src", imgp2)
if (p1 > p2) {
    dicelst.innerHTML = "🚩 Player 1 Wins";
} else if (p2 > p1) {
    dicelst.innerHTML = "Player 2 Wins 🚩";
}else if(p1===p2){
    dicelst.innerHTML="Draw";
}