let output = document.querySelector('.out')
let a=1;
let buttons = document.querySelectorAll('.box p')
buttons.forEach((currentele, index) => {
    currentele.addEventListener('click', () => {
        if (currentele.innerHTML == '=') {
            output.innerHTML = eval(output.innerHTML)
            a=4;
        }
        else if (currentele.innerHTML == 'Back') {
            // let newStr = str.slice(0, -1);

            let a = output.innerHTML.slice(0, -1)
            //   console.log(1)
            output.innerHTML = a;

        }
        else if (currentele.innerHTML == 'Clear') {
            output.innerHTML = ''
            console.log(12)
        }
        else {
            if(a==4){
                output.innerHTML=''
                a=1
            }
            output.innerHTML += currentele.innerHTML
        }
    })

})
