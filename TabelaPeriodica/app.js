var hidrogenio = {
    simbolo: "H",
    nome: "Hidrogênio",
    numero: "1",
    massa: "1,008"
}

function itemClicked(simbol)
{
    if(simbol == 'h')
    {
        document.getElementById('numc').innerHTML = hidrogenio.numero;
        document.getElementById('simbolo').innerHTML = hidrogenio.simbolo;
        document.getElementById('nomec').innerHTML = hidrogenio.nome;
        document.getElementById('numa').innerHTML = hidrogenio.massa;

        document.getElementById('nome').innerHTML = "Nome: " + hidrogenio.nome;
        document.getElementById('simbol').innerHTML = "Símbolo: " + hidrogenio.simbolo;
        document.getElementById('numero').innerHTML = "Número: " + hidrogenio.numero;
        document.getElementById('massa').innerHTML = "Massa: " + hidrogenio.massa;
    }
}