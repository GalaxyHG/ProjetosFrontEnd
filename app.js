var hidrogenio = {
    simbolo: "H",
    nome: "Hidrogênio",
    numero: "1",
    massa: "1,008"
}

var helio = {
    simbolo: "He",
    nome: "Hélio",
    numero: "2",
    massa: "4,0026"
}

var cobre = {
    simbolo: "Cu",
    nome: "Cobre",
    numero: "29",
    massa: "63,546"
}

function itemClicked(simbol)
{
    if(simbol == 'h')
    {
        document.getElementById('numc').innerHTML = hidrogenio.numero;
        document.getElementById('simbolo').innerHTML = hidrogenio.simbolo;
        document.getElementById('nomec').innerHTML = hidrogenio.nome;
        document.getElementById('numa').innerHTML = hidrogenio.massa;

        document.getElementById('nome').innerHTML = "<b>Nome: </b>" + hidrogenio.nome;
        document.getElementById('simbol').innerHTML = "<b>Símbolo: </b>" + hidrogenio.simbolo;
        document.getElementById('numero').innerHTML = "<b>Número: </b>" + hidrogenio.numero;
        document.getElementById('massa').innerHTML = "<b>Massa: </b>" + hidrogenio.massa;
        document.getElementById('cardItem').style.backgroundColor = 'rgba(58, 185, 19, 0.685)';
    }
    else if(simbol == 'he')
    {
        document.getElementById('numc').innerHTML = helio.numero;
        document.getElementById('simbolo').innerHTML = helio.simbolo;
        document.getElementById('nomec').innerHTML = helio.nome;
        document.getElementById('numa').innerHTML = helio.massa;

        document.getElementById('nome').innerHTML = "<b>Nome: </b>" + helio.nome;
        document.getElementById('simbol').innerHTML = "<b>Símbolo: </b>" + helio.simbolo;
        document.getElementById('numero').innerHTML = "<b>Número: </b>" + helio.numero;
        document.getElementById('massa').innerHTML = "<b>Massa: </b>" + helio.massa;
        document.getElementById('cardItem').style.backgroundColor = 'rgba(19, 127, 250, 0.774)';
    }
    else if(simbol == 'cu')
    {
        document.getElementById('numc').innerHTML = cobre.numero;
        document.getElementById('simbolo').innerHTML = cobre.simbolo;
        document.getElementById('nomec').innerHTML = cobre.nome;
        document.getElementById('numa').innerHTML = cobre.massa;

        document.getElementById('nome').innerHTML = "<b>Nome: </b>" + cobre.nome;
        document.getElementById('simbol').innerHTML = "<b>Símbolo: </b>" + cobre.simbolo;
        document.getElementById('numero').innerHTML = "<b>Número: </b>" + cobre.numero;
        document.getElementById('massa').innerHTML = "<b>Massa: </b>" + cobre.massa;
        document.getElementById('cardItem').style.backgroundColor = 'rgb(248, 97, 97)';
    }
}