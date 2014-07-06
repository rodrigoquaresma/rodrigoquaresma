//= require shortcut

var dayFilterIndex = 0;
var catFilterIndex = 0;
var detailItemsIndex = 0;
var regIndexSub = 0;
var regIndex = 0;
var regIndexJump = 0;
var dayRegIndex = 0;
var layerIndex = 0;
var regIndexCovers = 0;


var content = null;
var isLoading = false;
var amanha = new Date();
var numDias = 0;


var capas = [
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Motherssss",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-03.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-04.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-09.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-10.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-11.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-12.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-13.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-14.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-08.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-06.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-03.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-04.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-09.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-10.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-11.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-12.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-13.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-14.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-08.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-06.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-03.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-09.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-10.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-11.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-12.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-13.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-14.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-08.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-06.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-03.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-04.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-05.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-09.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-10.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-11.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-12.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-13.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  },
  {
    category: "",
    itens: [
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-02.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-14.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-08.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-06.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      },
      {
        title: "How I Met Your Mother",
        img: "assets/oxys/simulador/poster-01.jpg",
        rating: ["Classifição Etária", "16 anos"],
        genre: ["Gênero", "Série, Comédia"]
      }
    ]
  }
];

var itensMenu = [
{
  id: "canais-de-tv",
  title: "TV Guide",
  submenu: [
  {
    cover: false,
    title: "TV Guide"
  },
  {
    cover: false,
    title: "Trending Shows"
  },
  {
    cover: false,
    title: "My Remenbers"
  },
  {
    cover: false,
    title: "Pay Per View"
  }
  ]
},
{
  id: "outra-chance",
  title: "Catch Up TV",
  submenu: [
  {
    cover: true,
    title: "News"
  },
  {
    cover: true,
    title: "Telecine Play"
  },
  {
    cover: true,
    title: "Globosat HD"
  },
  {
    cover: true,
    title: "Gloob HD"
  },
  {
    cover: true,
    title: "SporTV"
  },
  {
    cover: true,
    title: "GNT"
  },
  {
    cover: true,
    title: "Multishow"
  },
  {
    cover: true,
    title: "Viva"
  },
  {
    cover: true,
    title: "Bis Multishow HD"
  },
  {
    cover: true,
    title: "Concert Channel"
  },
  {
    cover: true,
    title: "Nick Jr."
  },
  {
    cover: true,
    title: "OFF HD"
  }
  ]
},
{
  id: "on-demand",
  title: "On Demand",
  submenu: [
  {
    cover: true,
    title: "Lançamentos"
  },
  {
    cover: true,
    title: "Especial Halloween"
  },
  {
    cover: true,
    title: "Especial A Era do Gelo"
  },
  {
    cover: true,
    title: "Destaques"
  },
  {
    cover: true,
    title: "Categorias"
  },
  {
    cover: true,
    title: "Infantil"
  },
  {
    cover: true,
    title: "Adultos"
  },
  {
    cover: true,
    title: "Pacotes"
  },
  {
    cover: true,
    title: "Promoções"
  },
  {
    cover: true,
    title: "Ajuda GVT TV"
  },
  {
    cover: true,
    title: "Meus Programas"
  }
  ]
},
{
  id: "gravador",
  title: "Gravador",
  submenu: [
  {
    cover: false,
    title: "Minhas Gravações"
  },
  {
    cover: false,
    title: "Agenda de gravações"
  },
  {
    cover: false,
    title: "Gravar por horário"
  }
  ]
},
{
  id: "destaques",
  title: "Destaques",
  submenu: [
  {
    cover: false,
    title: "Da TV"
  },
  {
    cover: false,
    title: "Do On Demand"
  },
  {
    cover: false,
    title: "Do Outra Chance"
  },
  {
    cover: false,
    title: "Jogos"
  }
  ]
},
{
  id: "aplicativos",
  title: "Aplicativos",
  submenu: [
  {
    cover: false,
    title: "Favoritos"
  },
  {
    cover: false,
    title: "Novidades"
  },
  {
    cover: false,
    title: "Destaques"
  },
  {
    cover: false,
    title: "Todos"
  }
  ]
},
{
  id: "busca",
  title: "Busca",
  submenu: [
  {
    cover: false,
    title: "Tudo"
  },
  {
    cover: false,
    title: "Por título"
  },
  {
    cover: false,
    title: "Por elenco"
  },
  {
    cover: false,
    title: "Por gênero"
  }
  ]
},
{
  id: "configuracoes",
  title: "Configurações",
  submenu: [
  {
    cover: false,
    title: "Preferências"
  },
  {
    cover: false,
    title: "Redes Sociais"
  },
  {
    cover: false,
    title: "Gravador"
  },
  {
    cover: false,
    title: "Bloqueios"
  }
  ]
}
];

function fillCapas(startIndex) {
  var container = document.getElementById('containerCapas');
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  if(startIndex==0) {
    var templi = document.createElement('li');
    templi.setAttribute("class","categoria");

    container.appendChild(templi);
  }
  for(var i=startIndex;i<itensMenu[regIndex].submenu.length;i++) {
    /* TODO: soh esta mostrando o numero de capas = total de itens do submenu */
    var li = document.createElement('li');
    li.setAttribute("class","categoria");
    var titulo = document.createElement('h2');
    titulo.innerHTML = itensMenu[regIndex].submenu[i].title;
    li.appendChild(titulo);
    if(startIndex>0 && i==startIndex) {
      var li1 = document.createElement('li');
      li1.appendChild(createCoverLine(i-1, false));
      li1.setAttribute("class","categoria");
      container.appendChild(li1);
    }
    if(i==startIndex) {
      li.setAttribute("class","categoria focado");
      li.appendChild(createCoverLine(i, true));
    } else {
      li.appendChild(createCoverLine(i, false));
    }
    container.appendChild(li);
  }
}

function createCoverLine(index, focado) {
  var ul = document.createElement('ul');
  ul.setAttribute("class", "eventos");
  for(var j=0; j<capas[index].itens.length;j++) {
    var liClass = document.createElement('li');
    liClass.setAttribute("class", "evento");
    if(focado) {
      if(j==regIndexCovers) liClass.setAttribute("class", "evento focado");
      liClass.setAttribute("id", "capa"+j);
    }

    var h3 = document.createElement('h3');
    h3.innerHTML = capas[index].itens[j].title;

    var img = document.createElement('img');
    img.setAttribute("src", capas[index].itens[j].img);

    var dl = document.createElement('dl');

    var dtr = document.createElement('dt');
    dtr.setAttribute("class", "rating");
    dtr.innerHTML = capas[index].itens[j].rating[0];
    var ddr = document.createElement('dd');
    ddr.setAttribute("class", "rating r-16");
    ddr.innerHTML = capas[index].itens[j].rating[1];

    dl.appendChild(dtr);
    dl.appendChild(ddr);

    var dtg = document.createElement('dt');
    dtg.setAttribute("class", "genre");
    dtg.innerHTML = capas[index].itens[j].genre[0];
    var ddg = document.createElement('dd');
    ddg.setAttribute("class", "genre");
    ddg.innerHTML = capas[index].itens[j].genre[1];

    dl.appendChild(dtg);
    dl.appendChild(ddg);

    liClass.appendChild(h3);
    liClass.appendChild(img);
    liClass.appendChild(dl);
    ul.appendChild(liClass);
  }
  return ul;
}

function fillSubMenu(startIndex) {

  var container = document.getElementById('submenu');
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  var contadorAltura=304;

  for(var j=startIndex;j<itensMenu[regIndex].submenu.length;j++) {
    if(startIndex>0 && j==startIndex) {
      var submenu = document.createElement('li');
      submenu.setAttribute("class", "subitem");
      submenu.setAttribute("style", "top:240px;");

      var sp = document.createElement('span');
      sp.innerHTML = itensMenu[regIndex].submenu[j-1].title;
      submenu.appendChild(sp);
      container.appendChild(submenu);
    }

    var submenu = document.createElement('li');
    if(j==startIndex)
    submenu.setAttribute("class", "subitem focado");
    else
    submenu.setAttribute("class", "subitem");
    submenu.setAttribute("style", "top:" + contadorAltura + "px;");
    contadorAltura+=64;

    var sp = document.createElement('span');
    sp.innerHTML = itensMenu[regIndex].submenu[j].title;
    submenu.appendChild(sp);
    container.appendChild(submenu);
  }
}

function fillMenu(startIndex) {
  var container = document.getElementById('menu');
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  var contadorAltura=304;

  for(var i=startIndex;i<itensMenu.length;i++) {
    if(startIndex>0 && i==startIndex) {
      var cat = document.createElement('li');
      cat.setAttribute("class", "item " + itensMenu[i-1].id);
      cat.setAttribute("style", "top:240px;");
      var sp = document.createElement('span');
      sp.innerHTML = itensMenu[i-1].title;
      cat.appendChild(sp);
      container.appendChild(cat);
    }
    var cat = document.createElement('li');
    cat.setAttribute("class", "item " + itensMenu[i].id);
    cat.setAttribute("style", "top:" + contadorAltura + "px;");
    contadorAltura+=64;
    var sp = document.createElement('span');
    sp.innerHTML = itensMenu[i].title;
    cat.appendChild(sp);

    if(i==startIndex) {
      cat.setAttribute("class", "item "+itensMenu[i].id+" focado");
      var itens = document.createElement('ul');
      itens.setAttribute("class", "submenu fechado");
      itens.setAttribute("id", "submenu");

      cat.appendChild(itens);

    }
    container.appendChild(cat);

  }
  fillSubMenu(0);
}

function init() {
  shortcut.add("enter", function() {
    if(!isLoading) {
      if(layerIndex==0) {
        acessaSubMenu();
      } else if(layerIndex==1) {
        checkSubMenuAction();

      } else if(layerIndex==2) {
        checkCoversAction();
      }
    }
  });

  shortcut.add("left", function() {
    if(!isLoading) {
      if(layerIndex==1) {
        fechaSubMenu();
      } else if(layerIndex==2) coverNavigate(-1);
    }

  });

  shortcut.add("right", function() {
    if(!isLoading) {
      if(layerIndex==0) {
        acessaSubMenu();
      } else if(layerIndex==1) {
        checkSubMenuAction();
      } else if(layerIndex==2) {
        coverNavigate(1);
      }
    }

  });

  shortcut.add("up", function() {
    if(!isLoading) {
      if(layerIndex==0)
      navigate(-1);
      else if(layerIndex==1 || layerIndex==2)
      navigateSubmenu(-1);
    }
  });

  shortcut.add("down", function() {
    if(!isLoading) {
      if(layerIndex==0)
      navigate(1);
      else if(layerIndex==1 || layerIndex==2)
      navigateSubmenu(1);
    }
  });
  navigate(0);
}

function coverNavigate(value) {
  var oldIndex = regIndexCovers;

  if(((regIndexCovers+value) < capas[regIndexSub].itens.length) && ((regIndexCovers+value)>=0)) regIndexCovers = regIndexCovers+value;
  else if((regIndexCovers+value) == (capas[regIndexSub].itens.length)) regIndexCovers = capas[regIndexSub].itens.length-1;
  else {
    regIndexCovers = 0;
    changeClass("covers", "fechado");
    layerIndex = 1;
  }

  changeClass("capa" + oldIndex, "evento ");
  changeClass("capa" + regIndexCovers, "evento focado");

}

function checkCoversAction() {
  changeClass("covers", "fechado");
  layerIndex = 1;
}

function checkSubMenuAction() {
  if(itensMenu[regIndex].submenu[regIndexSub].cover) {
    layerIndex=2;
    changeClass("covers", "aberto");
  } else {
    if(regIndex==0 && regIndexSub==0) window.location="oxys/guide";
    else alert(itensMenu[regIndex].submenu[regIndexSub].title);
  }
}

function acessaSubMenu() {
  changeClass("submenu", "submenu aberto");
  layerIndex = 1;
  checkMain();
}

function checkMain() {
  if(itensMenu[regIndex].submenu[regIndexSub].cover) {
    regIndexCovers = 0;
    fillCapas(regIndexSub);
    document.getElementById("main").style.width = "1280px";
  } else document.getElementById("main").style.width = "480px";
}

function fechaSubMenu() {
  changeClass("submenu", "submenu fechado");
  layerIndex = 0;
  regIndexSub = 0;
  fillSubMenu(0);
  document.getElementById("main").style.width = "480px";
}

function changeClass (elementID, newClass) {
  try{
    var element = document.getElementById(elementID);

    element.setAttribute("class", newClass); //For Most Browsers
  } catch(e){alert(elementID + " : " + newClass + " : " + e.message);}
}

function navigate(value) {

  if(((regIndex+value) < itensMenu.length) && ((regIndex+value)>=0)) regIndex = regIndex+value;
  else if((regIndex+value) == (itensMenu.length)) regIndex = itensMenu.length-1;
  else regIndex = 0;

  fillMenu(regIndex);
}

function navigateSubmenu(value) {

  if(((regIndexSub+value) < itensMenu[regIndex].submenu.length) && ((regIndexSub+value)>=0)) regIndexSub = regIndexSub+value;
  else if((regIndexSub+value) == (itensMenu[regIndex].submenu.length)) regIndexSub = itensMenu[regIndex].submenu.length-1;
  else regIndexSub = 0;

  checkMain();
  fillSubMenu(regIndexSub);
}
