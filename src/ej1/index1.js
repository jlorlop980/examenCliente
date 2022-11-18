/**
 * Clase de jugador con la que realizamos toda la logica del juego
 */
class Jugador{
  /**
   * Constructor de la clase
   * @param {String} nombre 
   * @param {String} apellidos 
   */
    constructor(nombre,apellidos){
        this.Nombre=nombre;
        this.Apellidos=apellidos;
        this.Nivel=1;
        this.Puntuacion=1;
        this.pl=1; //variable que utilizo para controlar cuando ha perdido 10 puntos
      	this.active=true; //variable que uso para que cuando pierda no pueda seguir jugando
    }

    /**
     * Funcion que comprueba si el jugador puede jugar, es decir si ya ha perdido o todavia no
     * @returns {Number}
     */
    canPlay(){
        if(this.active){return 1;}
        else{return 0;}
    }
    
    /**
     * Funcion con la que añado puntos al usuarios
     * @returns {void}
     */
    killedAZombie(){
      if(this.canPlay()){ //una vez comprobamos si esta elimado empezamos a añadir puntos
        this.Puntuacion++;
        if(this.Puntuacion%10==0){ //cada multiplo de 10 sube de nivel por lo que el nivel se puede sacar con esa "formula"
            this.Nivel=(this.Puntuacion/10)+1;
          alert("sube de nivel");
        }
      }
      else{ //este seria el caso del jugador que ha sido eliminado, por lo que no puede jugar
        alert("jugador eliminado, no puede jugar");
          }
    }

    /**
     * Funcion que se usa en el caso de ser golpeado por un zombie
     * @returns {Number} en caso de que haya perdido sera -1 si no podia jugar -2 y si simplemente ha perdido puntos 0
     */
    hittedByZombie(){ 
      if(this.canPlay()){
        this.Puntuacion--;
        if(this.Puntuacion==0){
            this.Nivel=1;
            alert(`El jugador ${this.nombre} ${this.apellidos} ha sido eliminado`);
          	this.active=false;
            return -1;
        }
        else{
            this.pl++;
            if(this.pl==10){
                this.Nivel--;
                this.pl=0;
            }
            return 0;
        }
    	}
     else{//aqui estaria el caso de que hubiese perdido ya por lo que no puede seguir jugando
      alert("jugador eliminado, no puede jugar");
      return -2;
        }
    }
}

let jugador1=new Jugador("Jose","Lorenzo Lopez");
let jugador2= new Jugador("Sebas","Romero Lucena");
const jugadores=[jugador1,jugador2];