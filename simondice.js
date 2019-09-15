const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL=1

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar() {
        this.elegircolor=this.elegircolor.bind(this)
        //this.toggleBtnEmpezar();
        btnEmpezar.classList.toggle('hide')
        this.nivel = 1;
        this.colores = {
            celeste, 
            violeta, 
            naranja, 
            verde
        }
    }

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        }else{
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        console.log(this.secuencia)
    }

    siguienteNivel() {
        this.subnivel=0
        this.iluminarSecuencia();
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0: return 'celeste'
            case 1: return 'violeta'
            case 2: return 'naranja'
            case 3: return 'verde'

        }

    }

    transformarColorANumero(color) {
        switch (color) {
            case 'celeste': return 0
            case 'violeta': return 1
            case 'naranja': return 2
            case 'verde': return 3

        }

    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            let color = this.transformarNumeroAColor(this.secuencia[i])
            console.log(color)
            setTimeout(() => {
                this.iluminarColor(color)
            }, (1000 * i))
            //this.iluminarColor(color)

        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click',this.elegircolor.bind(this))
        this.colores.verde.addEventListener('click',this.elegircolor)
        this.colores.violeta.addEventListener('click',this.elegircolor)
        this.colores.naranja.addEventListener('click',this.elegircolor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click',this.elegircolor)
        this.colores.verde.removeEventListener('click',this.elegircolor)
        this.colores.violeta.removeEventListener('click',this.elegircolor)
        this.colores.naranja.removeEventListener('click',this.elegircolor)
    }

    elegircolor(ev){
        console.log(ev)
        const nombreColor=ev.target.dataset.color
        const numeroColor=this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor);
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel===this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL+1)){
                    this.ganoElJuego()
                }else{
                    setTimeout(this.siguienteNivel.bind(this),1500)
                }
            }
        }else{
            this.perdioElJuego()
            
        }



    }

    ganoElJuego(){
        swal('Platzi','Felicidades, Ganaste el Juego','success').then(()=>{
            this.inicializar()
        })
    }


    perdioElJuego(){
        swal('Platzi','Lo lamentamos, perdiste el Juego','error').then(()=>{
            this.eliminarEventosClick()
            this.inicializar()

        })
    }
}

function empezarJuego() {
    var juego = new Juego()
}



// const celeste = document.getElementById("celeste");
// const violeta = document.getElementById("violeta");
// const naranja = document.getElementById("naranja");
// const verde = document.getElementById("verde");
// const btnEmpezar = document.getElementById("btnEmpezar");

// class Juego {
// 	constructor() {
// 		this.inicializar();
// 		this.generar_secuencia();
// 		this.siguiente_nivel();
// 	}
// 	inicializar() {
// 		btnEmpezar.classList.add("hide");
// 		this.nivel = 1;
// 		this.colores = {
// 			celeste,
// 			violeta,
// 			naranja,
// 			verde
// 		};
// 	}

// 	generar_secuencia() {
// 		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
// 	}

// 	siguiente_nivel() {
// 		this.iluminar_secuencia();
// 	}

// 	transformar_numero_a_color(numero) {
// 		switch (numero) {
// 			case 0:
// 				return "celeste";
// 			case 1:
// 				return"violeta";
// 			case 2:
// 				return "naranja";
// 			case 3:
// 				return "verde";
// 		}
// 	}

// 	iluminar_secuencia() {
// 		for (let i = 0; i < this.nivel; i++) {
//             let color = this.transformar_numero_a_color(this.secuencia[i]);
//             console.log(color)
// 			setTimeout(() => this.iluminar_color(color), 1000 * i);
// 		}
// 	}

// 	iluminar_color(color) {
// 		this.colores[color].classList.add("light");
// 		setTimeout(() => this.apagar_color(color), 500);
// 	}

// 	apagar_color(color) {
// 		this.colores[color].classList.remove("light");
// 	}
// }

// function empezarJuego(){
// 	var juego = new Juego()
// }
