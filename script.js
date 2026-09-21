let inputElement = document.getElementById("inputElement");
let para = document.getElementById("text")

function inputtext() {
    let name = inputElement.value;
    let ans = "Hi " + name + ",Verifying your account";
    para.textContent = ans;
}