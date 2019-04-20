const input = document.getElementById('input');
const button = document.getElementById('btn');
const output = document.getElementById('output');
const alertMessage = document.getElementById('alert');



// const bin = '10011101';
// const print = parseInt(bin, 2)
// console.log(print);





const validator = () => {
    let value = input.value;
   [...value].map(el => {
        if(el == 1 || el == 0) {
            alertMessage.innerHTML = ''
         
        } else {
          let wrongValue = value.substring(value.length - 1)
          console.log(wrongValue)
            alertMessage.innerHTML = `only binary number allowed but you typed ${wrongValue}`
            input.value = value.substring(0, value.length- 1)
          
        }
   })

}

const convertToDecimal = () => {
   let value = input.value
   output.innerHTML = `Your Decimal Number: is ${parseInt(value, 2)} for ${value} binary number`
}

button.addEventListener('click', convertToDecimal)
input.addEventListener('input', validator)





