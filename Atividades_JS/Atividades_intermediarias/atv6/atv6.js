let input_number = document.getElementById('number');
let btn_calc = document.getElementById('btn_add');
let btn_clean = document.getElementById('btn_remove');
let result = document.getElementById('resultado');

let arr = [];

let getElementAndCalculate = () =>{
    let input_value = input_number.value;
    arr.push(input_value);
    let config = arr.map((item) =>{
        let calc = item * 3;
        return calc;
    })
    result.innerHTML = config.join(',')
}

let cleanArray = () => {
   let remove =  arr.splice(0, arr.length)
   result.innerHTML = '';
};

btn_calc.addEventListener('click', getElementAndCalculate);
btn_clean.addEventListener('click', cleanArray);