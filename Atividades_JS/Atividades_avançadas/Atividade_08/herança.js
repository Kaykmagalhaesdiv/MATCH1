class Animal {
    nome = "";
    codigo = "";
    #dataNascimento = "";
  
    constructor(nome) {
      this.nome = nome;
    }
    set DataNascimento(value) {
      let dataIvertida = value.split("/").reverse().join("/");
      this.#dataNascimento = dataIvertida;
    }
  }
  
  class Ave extends Animal {
    VelocidadeVoo = "";
    QuantidadeAsas = "";
    TamanhoBico = "";
  
    constructor(nome, TamanhoBico) {
      super(nome);
      this.TamanhoBico = TamanhoBico;
    }
  }
  
  let meuAnimal = new Animal("Mel");
  meuAnimal.codigo = 1;
  meuAnimal.DataNascimento = "2015/06/10";
  console.log(meuAnimal);
  
  class Peixe extends Animal {
    TipoAguaHabitat = "";
    PossuiEscamas = "";
    PossuiBarbatana = "";
  
    constructor(nome, TipoAguaHabitat) {
      super(nome);
      this.TipoAguaHabitat = TipoAguaHabitat;
    }
  }
  
  let peixinho = new Peixe("Lilica", "Água doce");
  console.log(peixinho);
  
  class Mamifero extends Animal {
    PossuiPelo = "";
    Velocidade = "";
    PossuiCalda = "";
  
    constructor(nome, PossuiCalda) {
      super(nome);
      this.PossuiCalda = PossuiCalda;
    }
  }
  let onca = new Mamifero("Pintada", "Sim");
  console.log(onca);
  
  class AveFalante extends Ave {
    Vocabulario = [];
  
    constructor(nome, TamanhoBico, palavras) {
      super(nome, TamanhoBico);
      this.Vocabulario = palavras;
    }
  }
  
  class AveNaoFalante extends Ave {
    TipoPiado = ""
  }
  
  let papagaio = new AveFalante("Lola", 5, ["Oi", "Tchau"]);
  console.log(papagaio);
  
  let periquito = new AveNaoFalante();
  
  class Canino extends Mamifero {
    ConsegueLatir = "";
    ConsegueUiva = "";
  
    constructor(nome, PossuiCalda, ConsegueLatir) {
      super(nome, PossuiCalda);
      this.ConsegueLatir = ConsegueLatir;
    }
  }
  
  class Felino extends Mamifero {
    ConsegueMiar = "";
  
    constructor(nome, PossuiCalda, ConsegueMiar) {
      super(nome, PossuiCalda);
      this.ConsegueMiar = ConsegueMiar;
    }
  }
  let cachorro = new Canino("Cindy", "Sim", "Sim");
  console.log(cachorro);
  
  let gato = new Felino("Marie", "Sim", "Sim");
  console.log(gato);