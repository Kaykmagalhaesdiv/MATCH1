class Product{
   #id = 0;
   name = "";
   
   constructor(id,nome){
    this.#id = id;
    this.name = nome;
   };
}

class Order{
    #id = 0;
    created = null;
    #products = [];
    
    constructor(){
        this.created = new Date();
    }

    get ProdutosSalvos(){
        return this.#products;
    }

    addProduct(value){
        if(value instanceof Product){
            this.#products.push(value);
            return
        }
        throw new Error("Produto invalido!");
    }

    calcularShipping(){
        throw new Error("Metodo não implementado");
    }
}

class OrderStore extends Order{
    tableNumber = 0;

    constructor(tableNumber){
        this.tableNumber = tableNumber;
    }

    calcularShipping(){
        return 0;
    }
}

class Client{
    #id = 0;
    name;
    address;
    zipCode;
    active;

    constructor(id,name,address,zip,active){
        this.#id = id;
        this.name = name;
        this.address = address;
        this.zipCode = zip;
        this.active = active;
    }
}

class OrderDelivery extends Order{
    client;
    constructor(cliente){
        super()
       if(!cliente instanceof Client){
            throw new Error("Cliente invalido!"); 
        }
        this.client = cliente
    }

    calcularShipping(zipCode){
        const currentZipcode = zipCode ?? this.client.zipCode
        if(currentZipcode.charAt(0) <= 4){
            return 5;
        }else if(currentZipcode.charAt(0) >= 5 && currentZipcode.charAt(0) <= 9){
            return 10;
        } else{
            throw new Error("Cep inválido");
        }
    }
}

const pedido = new Order();
const pizza = new Product(1,'Pizz doce');

const cliente = new Client(1,'kayk','Rua 2','422',true);
const orderDelivery = new OrderDelivery(cliente)

console.log(orderDelivery.calcularShipping());

pedido.addProduct(pizza);
