let number = 0;

// h1에 있는 숫자 요소를 가져오자
//const resultH1 = document.getElementsByTagName('h1')[0];
const resultH1 = document.getElementById('result');
// button에 있는 + 요소를 가져오자
//const plusButton = document.getElementsByTagName('button')[0];
const plusButton = document.querySelector('.plus');

// plusButton.addEventListener("click", () =>{
//     number++;
//     resultH1.innerText = number;
// });
plusButton.addEventListener("click", () =>{
    number++;
    resultH1.innerText = number;
});

