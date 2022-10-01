const formelement = document.getElementById ("formulario-registro");

formelement.addEventListener ("submit",(event) => {
    event.preventDefault();
    let slecion =  document.getElementsByClassName("inpm-select").value;
    let inpmcontenedor = document.getElementsByClassName("inpm-contenedor").value;
    let formularioregistro = { slecion: inpm-select, inputcontenedor: inpm-contenedor };
    let formularioregistroJson = JSON.stringify(formularioregistro);
    console.log(formularioregistroJson);
})
