const firstNumber = Number(prompt("Digite o primeiro número:"))
const secondNumber = Number(prompt("Digite o segundo número:"))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`A soma dos dois número é ${sum}`)
alert(`A subtração dos dois número é ${sub}`)
alert(`A multiplicação dos dois número é ${mult}`)
alert(`A divisão dos dois número é ${div}`)
alert(`O resto da divisão entre os dois número é ${restDiv}`)

if (sum % 2 == 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if (firstNumber === secondNumber) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}