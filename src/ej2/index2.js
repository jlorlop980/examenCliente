/**
 * funcion que calcula los años bisiestos en un rango
 * @param {String} a parametro que recibimos gracias al prompt contiene el primer año
 * @param {String} b parametro que recibimos gracias al prompt contiene el segundo año
 * @returns {Array<Number>|Number} Nos devolvera un numero en caso de algun fallo (-1) o un array con los años correspondientes
 */
function isLeapYear(a,b){  
    let year1=parseInt(a);
    
    let year2=parseInt(b);
    
    if(year1<2001 || year2>2500||year1>year2){
        alert("debes introducir 2 numeros entre 2001 y 2500 además, el primero debe ser menor al segundo");
        return -1;
    }
    if(!isNaN(year1) && !isNaN(year2)){ //compruebo que lo introducido son numeros y parseInt no me ha devuelto NaN
        let leapYears=[];
        for(let i=year1;i<=year2;i++){
            if(i%4==0){ leapYears.push(i);}
            else if(i%100==0 && i%400==0){leapYears.push(i);}
        }
        return leapYears;
    }
    else{
        
        alert("debes introducir 2 años en formato numerico ej: 2022");
        return -1;
    }

}

/**
 * funcion que introduce en el DOM los distintos años
 * @param {Array<Number>} ly    Array con los años introducidos
 * @returns {Void}  no necesito devolver nada aquí
 */
function printYears(ly){
    let p=document.getElementById("leapY");
    p.innerHTML=ly.join(","); //unimos los años separados por una coma
}

/**
 * @type {String} primero
 */
let primero=prompt("introduce el primer año");


/**
 * @type {String} segundo
 */
let segundo=prompt("introduce el segundo año");


/**
 * @type {Array<Number>} primero
 */
const lyP=isLeapYear(primero,segundo);


if(lyP!=-1){ //si nos han devuelto un array entonces los mostramos
printYears(lyP);
}