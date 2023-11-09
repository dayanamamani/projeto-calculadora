const visor=document.getElementById("resultado");

function insert(num){

    visor.innerHTML=num;
}

function clean(clean) {

    visor.innerHTML=clean
    
}

function back( ) {

    let numvisor = visor.innerHTML;

    visor.innerHTML= numVisor.substring(0,numVisor.lenght -1)
}




if (calculo.length > 2) {

    let calculo=visor.innerHTML

visor.innerHTML = eval(calculo);

    
} else {

    visor.innerHTML= "erro!!!"
    
}


