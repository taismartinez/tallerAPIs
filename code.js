init()


async function init(){

    let listagatos = await cargarListaDeApi();
    
    document.querySelector("#divDatos").innerHTML = `<table border="2px solid black" id="tablaDatos"><tbody> <tr><th>Numero</th> <th>Dato</th></tr>`

    for(let i = 0; i<listagatos.length ; i++){
        
        document.querySelector("#tablaDatos").innerHTML += `<tr><td>${i}</td><td>${listagatos[i].text}</td></tr>`
    }

 document.querySelector("#divDatos").innerHTML += "</tbody></table>"
    
}


async function cargarListaDeApi(){
let retorno;

retorno = await fetch('https://cat-fact.herokuapp.com/facts')

let datos = await retorno.json();

return datos;


}