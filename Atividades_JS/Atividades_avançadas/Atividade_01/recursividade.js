const menus = [
    {
        nome: 'Menu 1',
        itens: [
            {nome:'Menu 1.1', itens:[]},
            {nome: 'Menu 1.2', itens:[]},
            {nome: 'Menu 1.3', itens:[{nome:'Menu 1.3.1', itens:[]}]},
        ]
    },
    {
        nome: 'Menu 2',
        itens:[
            {
                nome: 'Menu 2.1',
                itens:[{
                    nome:'Menu 2.1.1',
                    itens:[
                        {
                            nome: 'Menu 2.1.1.1',
                            itens:[
                                {nome:'Menu 2.1.1.1.1', itens:[]},
                                {nome:'Menu 2.1.1.1.2', itens:[]},
                            ]
                        }
                    ] 
                },{nome:'Menu 2.1.2', itens:[]},
            ]
            },
            {nome:'Menu 2.2', itens:[{nome:'Menu 2.2.1', itens:[]}]},
        ]
    }
];

let funcaoRecursiva = (arrItens, nomeItem) => {
    for (let i = 0; i < arrItens.length; i++) {
      if (arrItens[i].nome === nomeItem) {
        return nomeItem;
      }else if (arrItens[i].itens.length > 0) {
        let saida = funcaoRecursiva(arrItens[i].itens, nomeItem);

        if (saida !== undefined) {
          return `${arrItens[i].nome} > ${saida}`;
        }
      }
    }
  };
  
  console.log(funcaoRecursiva(menus, "Menu 2.1.1.1.2"));
  console.log(funcaoRecursiva(menus, "Menu 3.1"));