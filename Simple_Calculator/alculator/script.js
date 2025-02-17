// 電卓その1
// 一部をjsに追記してボタンの記述を簡略化
document.querySelectorAll(".operator-btn").forEach(button => {
    button.addEventListener("click", function () {
        appendValue(this.getAttribute("data-value"));
    });
});

let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// // 電卓その2
// // ボタンの情報を配列で定義
// const buttons = [
//     { label: "C", class: "clear-btn", onclick: "clearDisplay()" },
//     { label: "7", class: "number-btn", onclick: "appendValue('7')" },
//     { label: "8", class: "number-btn", onclick: "appendValue('8')" },
//     { label: "9", class: "number-btn", onclick: "appendValue('9')" },
//     { label: "÷", class: "operator-btn", onclick: "appendValue('/')" },
//     { label: "4", class: "number-btn", onclick: "appendValue('4')" },
//     { label: "5", class: "number-btn", onclick: "appendValue('5')" },
//     { label: "6", class: "number-btn", onclick: "appendValue('6')" },
//     { label: "×", class: "operator-btn", onclick: "appendValue('*')" },
//     { label: "1", class: "number-btn", onclick: "appendValue('1')" },
//     { label: "2", class: "number-btn", onclick: "appendValue('2')" },
//     { label: "3", class: "number-btn", onclick: "appendValue('3')" },
//     { label: "−", class: "operator-btn", onclick: "appendValue('-')" },
//     { label: "0", class: "number-btn", onclick: "appendValue('0')" },
//     { label: ".", class: "number-btn", onclick: "appendValue('.')" },
//     { label: "=", class: "equal-btn", onclick: "calculateResult()" },
//     { label: "+", class: "operator-btn", onclick: "appendValue('+')" }
// ];

// // ボタンを作成し、HTML に追加
// const buttonsContainer = document.querySelector(".buttons");
// buttons.forEach(button => {
//     const btn = document.createElement("button");
//     btn.textContent = button.label;
//     btn.className = button.class;
//     btn.setAttribute("onclick", button.onclick);
//     buttonsContainer.appendChild(btn);
// });
