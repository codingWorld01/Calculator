const inputBox = document.getElementById('inputBox');
const btn = document.querySelectorAll('button');

const arr = Array.from(btn);
let str = "";

arr.forEach(ele => {
    ele.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            inputBox.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            inputBox.value = str;
        }
        else if(e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1);
            inputBox.value = str;
        }
        else {
            str += e.target.innerHTML;
            inputBox.value = str;
        }
    })
})