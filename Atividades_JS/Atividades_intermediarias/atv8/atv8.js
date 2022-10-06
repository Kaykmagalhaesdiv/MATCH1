let shoppingCart = [
    {
        product: 'Leite Barnabé',
        measure: "Litro",
        qty: 5,
        price: 7.8
    },
    {
        product: 'Alcantra-fribov',
        measure: "kg",
        qty: 1.896,
        price: 40
    },
    {
        product: 'Refrigerante - Toca Polar',
        measure: "Pet - 2 Litros",
        qty: 3,
        price: 8.99
    },
    {
        product: 'Arroz - Tio Chicão',
        measure: "Pacote - 1kg",
        qty: 4,
        price: 5.99
    },
    {
        product: 'Peito de Frango - Hot Chicken',
        measure: "kg",
        qty: 5,
        price: 16.99
    },
];

let tableBody = document.getElementById('table_body');
let result = document.getElementById('total');

let newArray = shoppingCart.map((value) =>{
    return value.price
})

let priceSum = newArray.reduce((total,next) => {
    return total += next;   
})

let exibirTable = (element) => {
    tableBody.innerHTML += `<tr>
                            <td>${element.product}</td>
                            <td>${element.measure}</td>
                            <td>${element.qty}</td>
                            <td>${element.price}</td>
                            </tr>`
    let totaly = "O valor total dos produtos é de: " +  priceSum.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    result.innerHTML = totaly
};
shoppingCart.forEach(exibirTable)