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

const resolveMenu = (menu,nome,index = 0) => {
    
}

const resolveMenusRecursivos = (menus,nome,index = 0) =>{
    if(menus[index] == undefined){
        return [];
    }
    // resolveMenu(obj);
    resolveMenusRecursivos(menus,nome,++index)
    const obj = menus[index]
    console.log(obj)
}
resolveMenusRecursivos(menus, 'Menu 1')

