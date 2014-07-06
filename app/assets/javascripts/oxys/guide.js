//= require shortcut

var dayFilterIndex = 0;
var catFilterIndex = 0;
var detailItemsIndex = 0;
var hRegIndex = 0;
var regIndex = 0;
var regIndexJump = 0;
var dayRegIndex = 0;
var layerIndex = 0;

var content = null;
var isLoading = false;
var amanha = new Date();
var numDias = 0;

var dias = [
{
  timeStamp: new Date(),
  title: "hoje"
},
{
  timeStamp: getDay(1),
  title: "amanhã"
},
{
  timeStamp: getDay(2),
  title: formatWeekDay(getDay(2))
},
{
  timeStamp: getDay(3),
  title: formatWeekDay(getDay(3))
},
{
  timeStamp: getDay(4),
  title: formatWeekDay(getDay(4))
},
{
  timeStamp: getDay(5),
  title: formatWeekDay(getDay(5))
},
{
  timeStamp: getDay(6),
  title: formatWeekDay(getDay(6))
},
{
  timeStamp: getDay(7),
  title: formatWeekDay(getDay(7))
}
];

var itensMenuDias = [
{
  id: "",
  title: "",
  itens: []
},
{
  id: "voltar",
  title: "Voltar",
  itens: []
},
{
  id: "gravar",
  title: "Gravar",
  itens: [
  "Gravar episódio",
  "Gravar temporada",
  "Gravar série"
  ]
},
{
  id: "lembrete",
  title: "Lembrete",
  itens: []
},
{
  id: "curtir",
  title: "Curtir",
  itens: []
},
{
  id: "compartilhar",
  title: "Compartilhar",
  itens: []
},
{
  id: "tuitar",
  title: "Tuitar",
  itens: []
},
{
  id: "horarios",
  title: "+ horários",
  itens: [
  "Hoje, às 20:30, no canal 90 Warner HD",
  "Amanhã, às 17:30, no canal 90 Warner HD",
  "Amanhã, às 20:30, no canal 90 Warner HD",
  "Segunda 30/10, às 17:30, no canal 90 Warner HD",
  "Segunda 30/10, às 20:30, no canal 90 Warner HD",
  "Terça 31/10, às 17:30, no canal 90 Warner HD",
  "Terça 31/10, às 20:30, no canal 90 Warner HD",
  "Quarta 1/11, às 17:30, no canal 90 Warner HD",
  "Quarta 1/11, às 20:30, no canal 90 Warner HD",
  "Quinta 2/11, às 17:30, no canal 90 Warner HD",
  "Quinta 2/11, às 20:30, no canal 90 Warner HD",
  "Sexta 3/11, às 17:30, no canal 90 Warner HD",
  "Sexta 3/11, às 20:30, no canal 90 Warner HD"
  ]
},
{
  id: "elenco",
  title: "Elenco",
  itens: [
  "Jennifer Aniston",
  "Courteney Cox",
  "Lisa Kudrow",
  "Matt LeBlanc",
  "Matthew PerryDavid Schwimmer",
  "Mary Kay Place"
  ]
},
{
  id: "resumo",
  title: "Resumo",
  itens: []
}
];




var categorias = [ /* https://epg.gvt.com.br/metadados/channelCategories */
{
  uid: 0,
  value: "todos",
  active: true
},
{
  uid: 5,
  value: "Filmes",
  active: true
},
{
  uid: 11,
  value: "Séries",
  active: true
}
];

function addDay() {
  numDias++;
  amanha.setDate(amanha.getDate() + 1);
  amanha.setHours(0);
  amanha.setMinutes(0);
  amanha.setSeconds(0);
  amanha.setMilliseconds(0);

}

function formatWeekDay(data) {
  //Qua 10/10
  var semana=new Array(6);
  semana[0]='Dom';
  semana[1]='Seg';
  semana[2]='Ter';
  semana[3]='Qua';
  semana[4]='Qui';
  semana[5]='Sex';
  semana[6]='Sáb';
  return semana[data.getDay()] + " " + formatForDate(data.getDate()) + "/" + formatForDate(data.getMonth()+1);
}

function getDay(cont){
  var dia = new Date();
  dia.setDate(dia.getDate() + cont);
  dia.setHours(0);
  dia.setMinutes(0);
  dia.setSeconds(0);
  dia.setMilliseconds(0);
  return dia;
}

function init() {
  shortcut.add("enter", function() {
    if(!isLoading) {
      if(layerIndex==0) {
        buildDetailLayer();
        layerIndex=1;
      } else if(layerIndex==1) {
        if(detailItemsIndex==0) {
          layerIndex=0;
          detailItemsIndex=0;
          hideDetailLayer();
        } else {
          checkDetailMenuAction();
        }
      } else if(layerIndex==2) {
        checkDetailSubmenuAction();
      }
    }
  });

  shortcut.add("left", function() {
    if(!isLoading) {
      if(layerIndex==0) {
        navigate(-1);
      }
    }

  });

  shortcut.add("right", function() {
    if(!isLoading) {
      if(layerIndex==0) {
        navigate(1);
      } else if(layerIndex==1) {
        if(detailItemsIndex==0) {
          layerIndex=0;
          detailItemsIndex=0;
          hideDetailLayer();
        } else {
          checkDetailMenuAction();
        }
      } else if(layerIndex==2) {
        checkDetailSubmenuAction();
      }
    }
  });

  shortcut.add("up", function() {
    if(!isLoading) {
      if(layerIndex==0)
      verticalNavigate(-1);
      else if(layerIndex==1)
      detailMenuNavigate(-1);
      else
      detailMenuOptionsNavigate(-1);
    }
  });

  shortcut.add("down", function() {
    if(!isLoading) {
      if(layerIndex==0)
      verticalNavigate(1);
      else if(layerIndex==1)
      detailMenuNavigate(1);
      else
      detailMenuOptionsNavigate(1);
    }
  });

  fillCategorias();
  fillDias();

  requestData("https://epg.gvt.com.br/metadados/programmeGuide", 5000, successCallBack, failureCallback, filterFunc);
}

function checkDetailMenuAction() {
  if(itensMenuDias[detailItemsIndex+1].itens.length>0) {

    layerIndex = 2;
    changeClass("menuDetalhe", "menu aberto");
    exibeSubmenu();

  } else {
    doAction()
  }
}

function checkDetailSubmenuAction() {
  /*if(itensMenuDias[detailItemsIndex+1].itens.length>0) {

  layerIndex = 2;
  changeClass("menuDetalhe", "menu aberto");
  exibeSubmenu();

} else {
alert("realizando a seguinte ação: " + itensMenuDias[detailItemsIndex+1].id);
}*/
doAction();
layerIndex = 1;
changeClass("menuDetalhe", "menu fechado");
escondeSubmenu();
}

function doAction() {
  var tempIco = document.getElementById(itensMenuDias[detailItemsIndex+1].id+"Ico");
  if(tempIco!=null) {
    if(tempIco.style.display=="none") {
      tempIco.style.display="block";
    } else {
      tempIco.style.display="none";
    }
  }
}

function buildDetailLayer() {
  document.getElementById("navigationLayer").style.visibility = "hidden";
  document.getElementById("videoSource").style.width =  '352px';
  document.getElementById("videoSource").style.height =  '240px';
  changeClass("videoLayer", "tinyVideo");
  detailMenuNavigate(1);
}

function hideDetailLayer() {
  document.getElementById("navigationLayer").style.visibility = "visible";
  document.getElementById("videoSource").style.width =  '1280px';
  document.getElementById("videoSource").style.height =  '720px';
  changeClass("videoLayer", "fullVideo");
}

function fillItensMenuDias(startIndex) {
  var container = document.getElementById('menuDetalhe');
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  var contadorAltura=64;
  for(var i=startIndex;i<itensMenuDias.length;i++) {
    var cat = document.createElement('li');
    cat.setAttribute("class", "item " + itensMenuDias[i].id);
    cat.setAttribute("style", "top:" + contadorAltura + "px;");
    contadorAltura+=64;
    var sp = document.createElement('span');
    sp.innerHTML = itensMenuDias[i].title;
    cat.appendChild(sp);

    if(i==(startIndex+1)) {
      cat.setAttribute("class", "item focado " + itensMenuDias[i].id);
      if(itensMenuDias[i].itens.length>0) {
        var itens = document.createElement('ul');
        itens.setAttribute("class", "submenu");
        itens.setAttribute("style", "display:block; left:260px;");
        itens.setAttribute("id", "submenu");
        contadorAlturaSubitem = 128;
        for(var j=0;j<itensMenuDias[i].itens.length; j++) {
          var item = document.createElement('li');
          item.innerHTML = itensMenuDias[i].itens[j];
          item.setAttribute("class", "subitem");
          item.setAttribute("style", "top:"+contadorAlturaSubitem+"px");
          contadorAlturaSubitem+=64;
          if(j==0) {
            item.setAttribute("class", "subitem focado");
            item.setAttribute("id", "itemAbrir");
          }
          itens.appendChild(item);
        }
        cat.appendChild(itens);
      }
    }
    container.appendChild(cat);
  }
}

function fillCategorias() {

  requestData("https://epg.gvt.com.br/metadados/channelCategories", 5000, successCategoryCallBack, failureCallback, filterCategories);

}

function filterCategories(data) {
  var ret = new Array();
  ret.push( {
    uid: 0,
    value: "todos",
    active: true
  });

  for(var i=0; i< data.length;i++) {
    if(data[i].active==true) ret.push(data[i]);
  }
  return ret;
}

function successCategoryCallBack(data) {
  categorias = data;

  for(var i=0;i<categorias.length;i++){
    var cat = document.createElement('li');
    cat.setAttribute("id", "filterCat"+i);
    if(i==0) cat.setAttribute("class","foco");
    cat.innerHTML = decodeURIComponent(categorias[i].value).replace(/\+/g, " ");
    document.getElementById("filtroCategorias").appendChild(cat);
  }
}

function fillDias() {
  for(var i=0;i<dias.length;i++){
    var dia = document.createElement('li');
    dia.setAttribute("id", "filterDay"+i);
    if(i==0) dia.setAttribute("class","foco");
    dia.innerHTML = dias[i].title;
    document.getElementById("filtroDias").appendChild(dia);

  }
}

function filterFunc(data) {
  var ret = new Array();
  for(var i=0;i<data.length;i++) {
    switch(data[i].channelNumber) {
    case 90:
    case 91:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 120:
    case 121:
    case 122:
    case 123:
    case 124:
    case 125:
    case 126:
    case 127:
    case 128:
    case 129:
    case 130:
      ret.push(data[i]);
      break;
    default: break;
  }
}
return ret;

//return data;
}

function addNextPage() {
  if((!isLoading) && (numDias<7)) {
    addDay();
    isLoading = true;
    requestData("//epg.gvt.com.br/metadados/programmeGuide?date=" + amanha.getTime(), 5000, successPageCallBack, failureCallback, filterFunc);
  }
}

function addSecondPage() {
  if(!isLoading) {
    addDay();
    isLoading = true;
    requestData("//epg.gvt.com.br/metadados/programmeGuide?date=" + amanha.getTime(), 5000, secondPageCallBack, failureCallback, filterFunc);
  }
}


function secondPageCallBack(data) {
  for(var i=0; i<content.length; i++) {
    if(i<data.length) {
      if(content[i].channelNumber==data[i].channelNumber) {
        var tempArr = data[i].programmes.slice(0);

        if((content[i].programmes[content[i].programmes.length-1].programmeUid == tempArr[0].programmeUid)
        && (content[i].programmes[content[i].programmes.length-1].programmeStart == tempArr[0].programmeStart)) content[i].programmes.pop();

        for(var j=0;j<tempArr.length;j++) {
          content[i].programmes.push(tempArr[j]);
        }
      }
    }
  }
  addNextPage();
  isLoading = false;
  navigate(0);
}

function successPageCallBack(data) {
  for(var i=0; i<content.length; i++) {
    if(i<data.length) {
      if(content[i].channelNumber==data[i].channelNumber) {
        var tempArr = data[i].programmes.slice(0);

        if((content[i].programmes[content[i].programmes.length-1].programmeUid == tempArr[0].programmeUid)
        && (content[i].programmes[content[i].programmes.length-1].programmeStart == tempArr[0].programmeStart)) content[i].programmes.pop();

        for(var j=0;j<tempArr.length;j++) {
          content[i].programmes.push(tempArr[j]);
        }
      }
    }
  }
  isLoading = false;
}

function successCallBack(data) {
  content = data;
  addSecondPage();
}

function failureCallback(data) {
  navigate(0);
  for(obj in data)
  alert("erro " + obj + ": " + data[obj]);
}

function cleanChannelGuide(index) {
  document.getElementById("channelTitle" + index).innerText = "";
  document.getElementById("channelTitle" + index).style.backgroundImage = "url('')";

  var node = document.getElementById('guideDay' + index);
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

var requestData = function requestData(sURL, timeout, fCallback, errorCallback, filter) {
  var aPassArgs = Array.prototype.slice.call(arguments, 2), oReq = new XMLHttpRequest();
  oReq.ontimeout = function() {
    errorCallback(oReq);
  }

  var checkTimeout = function(){

    if(request!=undefined && request!=null){
      if (request.readyState != 4 && request.status != 200){
        log.error("::: Timeout.... will abort network request");
        request.abort();
        delete request;
        errorCallback();
      }
    } else {log.error("request esta null");}
  }

  var timeout =  setTimeout(checkTimeout,timeout);

  oReq.onreadystatechange = function(){
    if (oReq.readyState === 4){
      clearTimeout(timeout)
      if (oReq.status === 200) {
        var resultObject = eval('(' + oReq.responseText + ')');
        if(filter){
          fCallback(filter(resultObject));
        } else{
          fCallback(resultObject);
        }
      }else{
        var resultObject = eval('(' + oReq.responseText + ')');
        errorCallback(resultObject);
      }
    }
  };
  oReq.open("GET", sURL, true);
  oReq.timeout = timeout;
  oReq.send(null);
};

function formatChannelNumber(num) {
  var ret = num + "";
  if(ret.length==1) return "00"+ret;
  else if(ret.length==2) return "0"+ret;
  else return ret;
}

function buildChannelGuide(index, item) {

  try{
    document.getElementById("channelTitle" + index).innerText = item.channelNumber + " " + decodeURIComponent(item.channelName).replace(/\+/g, " ");

    document.getElementById("channelTitle" + index).style.backgroundImage = "url('"+ ((index==3)?"logos/" + formatChannelNumber(item.channelNumber) +".png":"logos/" + formatChannelNumber(item.channelNumber) +"-s.png") + "')";
    var hoje = new Date();
    var ts = Math.round((new Date()).getTime());

    /*for(var i=0; i< item.programmes.length;i++) { // dias dentro da programacao
    try{
    var data = item.guide[i].date.split('-');
    if((parseInt(data[0],10)==hoje.getFullYear())
    && (parseInt(data[2],10)==hoje.getDate())
    && (parseInt(data[1],10)==(hoje.getMonth()+1))) {

    dayRegIndex = i;*/
    buildDayGuide(index, 0, item);
    /*}
  } catch(e){alert(e.message);}
}*/
} catch(e){ alert(e.message); return false;}
return true;
}

function buildDayGuide(index, horaInicio, item){
  var dia = document.createElement('ul');
  dia.setAttribute("id", "dayGuideList" + index + "-" + horaInicio);
  var isToday = false;
  var hoje = new Date();
  var agora = hoje.getTime();

  for(var j=horaInicio; j< item.programmes.length;j++){
    if(agora<item.programmes[j].programmeStop) {
      var prog = document.createElement('li');
      var programmeStart = new Date(item.programmes[j].programmeStart);
      var programmeStop = new Date(item.programmes[j].programmeStop);

      var horaIni = formatForDate(programmeStart.getHours()) + ":" + formatForDate(programmeStart.getMinutes());
      var horaFim = formatForDate(programmeStop.getHours()) + ":" + formatForDate(programmeStop.getMinutes());
      var hora = horaIni + " - " + horaFim;

      if(agora<item.programmes[j].programmeStop && agora>item.programmes[j].programmeStart) {
        hora = "AGORA";
      }
      if(j==horaInicio) {
        if(index==3) {
          prog.setAttribute("id", "programacaoSelecionada");
          prog.setAttribute("class", "foco selecionado");
        } else  prog.setAttribute("class", "foco");
      } else {
        prog.setAttribute("class", "");
      }
      prog.innerHTML = "<h3>" + decodeURIComponent(item.programmes[j].programmeName).replace(/\+/g, " ") + "</h3> <p class='horario'>" + hora + "</p>";
      dia.appendChild(prog);
    } else {
      item.programmes.splice(j,1);
      j--;
    }
  }
  document.getElementById('guideDay' + index).appendChild(dia);

}

function exibeSubmenu() {
  isLoading = true;
  var movimento = setTimeout("exibeSubmenu()");
  var speed = 10;
  var divContainer = document.getElementById("detalhe").style;
  var divContainer2 = document.getElementById("submenu").style;

  var avancaDIV = parseInt(divContainer.left)+speed;
  var recuaDIV = parseInt(divContainer2.left)-speed;

  if(avancaDIV==654) {
    clearTimeout(movimento);
    isLoading = false;
    return false;
  }

  divContainer.left = avancaDIV+"px";
  divContainer2.left = recuaDIV+"px";
}

function escondeSubmenu() {
  isLoading = true;
  var movimento = setTimeout("escondeSubmenu()");
  var speed = 10;
  var divContainer = document.getElementById("detalhe").style;
  var divContainer2 = document.getElementById("submenu").style;

  var avancaDIV = parseInt(divContainer.left)-speed;
  var recuaDIV = parseInt(divContainer2.left)+speed;

  if(avancaDIV==374) {
    clearTimeout(movimento);
    isLoading = false;
    return false;
  }

  divContainer.left = avancaDIV+"px";
  divContainer2.left = recuaDIV+"px";
}

function buildDayPreview(index, horaInicio, item){
  var dia = document.createElement('ul');
  dia.setAttribute("id", "dayGuideList" + index + "-" + horaInicio);
  var isToday = false;
  var hoje = new Date();
  var agora = hoje.getTime();

  for(var j=horaInicio; j< item.programmes.length;j++){
    if(agora<item.programmes[j].programmeStop) {
      var prog = document.createElement('li');
      var programmeStart = new Date(item.programmes[j].programmeStart);
      var programmeStop = new Date(item.programmes[j].programmeStop);

      var horaIni = formatForDate(programmeStart.getHours()) + ":" + formatForDate(programmeStart.getMinutes());
      var horaFim = formatForDate(programmeStop.getHours()) + ":" + formatForDate(programmeStop.getMinutes());
      var hora = horaIni + " - " + horaFim;

      if(agora<item.programmes[j].programmeStop && agora>item.programmes[j].programmeStart) {
        hora = "AGORA";
      }
      if(j==horaInicio) {
        prog.setAttribute("id", "programacaoSelecionada");
        prog.setAttribute("class", "foco");
      } else {
        prog.setAttribute("class", "");
      }
      prog.innerHTML = "<h3>" + decodeURIComponent(item.programmes[j].programmeName).replace(/\+/g, " ") + "</h3> <p class='horario'>" + hora + "</p>";
      dia.appendChild(prog);
    } else {
      item.programmes.splice(j,1);
      j--;
    }
  }
  document.getElementById('guideDay' + index).appendChild(dia);

}

function formatForDate(num) {
  if(num<10) return "0"+num;
  else return num + "";
}

function detailMenuNavigate(value) {
  detailItemsIndex = detailItemsIndex+value;
  if(detailItemsIndex<0) detailItemsIndex=0;
  else if(detailItemsIndex>=(itensMenuDias.length-1)) detailItemsIndex=itensMenuDias.length-2;
  fillItensMenuDias(detailItemsIndex);
}

function detailMenuOptionsNavigate(value) {

}

function verticalNavigate(value) {
  if(value<=0) regIndexJump=0;
  regIndex=regIndex+value+regIndexJump;
  regIndexJump=0;
  addNextPage();


  if(regIndex >= 0) {
    document.getElementById("conteudo").style.top = "0px";
    changeClass("filtroCategorias", "filtro");
    changeClass("filtroDias", "filtro");

    if(getContent()[hRegIndex].programmes.length>regIndex) {
      var node = document.getElementById('guideDay3');
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
      checkDayFilter();
      buildDayGuide(3, regIndex, getContent()[hRegIndex]);
    } else regIndex--;
  } else {
    if(regIndex==-2) {
      document.getElementById("conteudo").style.top = "64px";
      changeClass("filtroCategorias", "filtro selecionado");
      changeClass("filtroDias", "filtro");
      changeClass("programacaoSelecionada", "foco");
    } else if(regIndex<-2) regIndex++;
    else if(regIndex==-1){
      document.getElementById("conteudo").style.top = "0px";
      changeClass("filtroCategorias", "filtro");
      changeClass("filtroDias", "filtro selecionado");
      changeClass("programacaoSelecionada", "foco");
    }
  }

}

function checkDayFilter() {
  var newIndex = 0;
  for(var i=0;i<dias.length;i++) {
    if((dias[i].timeStamp.getTime()>getContent()[hRegIndex].programmes[regIndex].programmeStart) ){
      newIndex = i-dayFilterIndex-1;
      i=dias.length;
    }
  }
  oldOne = dayFilterIndex;
  dayFilterIndex=dayFilterIndex+newIndex;
  if(dias[dias.length-1].timeStamp.getTime()<=getContent()[hRegIndex].programmes[regIndex].programmeStart) dayFilterIndex = dias.length-1;

  if(dayFilterIndex<0) dayFilterIndex=0;
  else if(dayFilterIndex>=dias.length) dayFilterIndex=dias.length-1;
  else {

    changeClass("filterDay"+oldOne, "");
    changeClass("filterDay"+dayFilterIndex, "foco");
  }
}

function getContent() {
  if(catFilterIndex==0) return content;
  else {
    var ret = new Array();
    for(var i=0;i<content.length;i++) {
      if(content[i].channelCategoryUid==categorias[catFilterIndex].uid) ret.push(content[i]);
    }
    return ret;
  }
}

function navigate(value) {
  if(regIndex>=0) {
    regIndex = 0;
    dayRegIndex = 0;
    changeClass("filterDay"+dayFilterIndex, "");
    changeClass("filterDay0", "foco");

    cleanChannelGuide(1);
    cleanChannelGuide(2);
    cleanChannelGuide(3);
    cleanChannelGuide(4);
    cleanChannelGuide(5);

    if(((hRegIndex+value) < getContent().length) && ((hRegIndex+value)>=0)) hRegIndex = hRegIndex+value;
    else if((hRegIndex+value) == getContent().length) hRegIndex = 0;
    else hRegIndex = getContent().length-1;


    buildFullContent();
    verticalNavigate(0);
  } else if(regIndex==-1) {
    dayFilterNavigate(value);
  } else {
    catFilterNavigate(value);
  }
}

function buildFullContent() {
  if(getContent().length>0) {
    for(var i=1; i< 6; i++) {
      var index = hRegIndex;
      switch(i) {
      case 1:
        if(hRegIndex>1) index = hRegIndex-2;
        else index = getContent().length-2+hRegIndex;
        break;
      case 2:
        if(hRegIndex>0) index = hRegIndex-1;
        else index = getContent().length-1;
        break;
      case 3:
        index = hRegIndex;
        break;
      case 4:
        if(hRegIndex<(getContent().length-1)) index = hRegIndex+1;
        else index = 0;
        break;
      case 5:
        if((hRegIndex+2)<getContent().length) index = hRegIndex+2;
        else index = hRegIndex-getContent().length+2;
        break;

      default: index = 0;
    }

    if((index>=0) && (index<getContent().length))
    buildChannelGuide(i, getContent()[index]);
  }
}
}

function dayFilterNavigate(value) {
  if(value>0)
  changeClass("filtroDias", "filtro selecionado esquerda");
  else if(value<0)
  changeClass("filtroDias", "filtro selecionado direita");
  addNextPage();

  dayFilterIndex = dayFilterIndex+value;
  if(dayFilterIndex<0) dayFilterIndex=0;
  else if(dayFilterIndex>=dias.length) dayFilterIndex=dias.length-1;
  else {
    changeClass("filterDay"+(dayFilterIndex-value), "");
    changeClass("filterDay"+dayFilterIndex, "foco");
    if(dayFilterIndex==0) {
      var node = document.getElementById('guideDay3');
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
      buildDayPreview(3, 0, getContent()[hRegIndex]);
      regIndexJump=0;
    } else {
      var index = 0;
      for(var j=0;j<getContent()[hRegIndex].programmes.length;j++) {
        if(dias[dayFilterIndex].timeStamp.getTime()<getContent()[hRegIndex].programmes[j].programmeStart) {
          regIndexJump = j-regIndex-1;
          j = getContent()[hRegIndex].programmes.length;
        }
      }
      var node = document.getElementById('guideDay3');
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
      buildDayPreview(3, regIndexJump, getContent()[hRegIndex]);
    }
  }
  setTimeout(function () { changeClass("filtroDias", "filtro selecionado"); }, 100);
}

function catFilterNavigate(value) {
  if(value>0)
  changeClass("filtroCategorias", "filtro selecionado esquerda");
  else if(value<0)
  changeClass("filtroCategorias", "filtro selecionado direita");

  catFilterIndex = catFilterIndex+value;
  if(catFilterIndex<0) catFilterIndex=0;
  else if(catFilterIndex>=categorias.length) catFilterIndex=categorias.length-1;
  else {
    changeClass("filterCat"+(catFilterIndex-value), "");
    changeClass("filterCat"+catFilterIndex, "foco");
    hRegIndex = 0;
    cleanChannelGuide(1);
    cleanChannelGuide(2);
    cleanChannelGuide(3);
    cleanChannelGuide(4);
    cleanChannelGuide(5);
    buildFullContent();
  }

  setTimeout(function () { changeClass("filtroCategorias", "filtro selecionado"); }, 100);
}

function changeClass (elementID, newClass) {
  try{
    var element = document.getElementById(elementID);

    element.setAttribute("class", newClass); //For Most Browsers
  } catch(e){alert(elementID + " : " + newClass + " : " + e.message);}
}
