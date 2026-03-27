let number = 0;

// h1에 있는 숫자 요소를 가져오자
const resultH1 = document.getElementById('result');
//const resultH1 = reset;
// const resultH1 = document.getElementsByTagName('h1')[0];

// button에 있는 + 요소를 가져오자
const plusButton = document.querySelector('.plus');
// const plusButton = document.getElementsByTagName('button')[0];

// 이벤트 방식 (버튼 클릭 시 실행)
// plusButton.addEventListener("click", () => {
//     number++;
//     resultH1.innerText = number;
// });
plusButton.onclick = plus;

// 함수 정의
const plus = () => {
    number++;
    resultH1.innerText = number;
}

const minus = () => {
    number--;
    resultH1.innerText = number;
}

const plus2 = () => {
    number += 2;
    resultH1.innerText = number;
}
const plus1 = () => {
    number ;
    resultH1.innerText = number;
}

const reset = () => {
    number = 0;
    resultH1.innerText = number;
}