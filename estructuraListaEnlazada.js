/* const lista = {
    cabecera: {
        valor: 6
        siguiente: {
            valor: 10                                             
            siguiente: {
                valor: 12
                siguiente: {
                    valor: 3
                    siguiente: null	
                    }
                }
            }
        }
    }
}; */


class NodoLista{
    constructor(dato){
        this.dato=dato;
        this.siguiente=null;
    }
}

class ListaEnlazada{
    constructor(cabecera=null){
        this.cabecera=cabecera;
    }

    magnitud() {
        let contador = 0; 
        let nodo = this.cabecera;
        while (nodo) {
            contador++;
            nodo = nodo.siguiente
        }
        return contador;
    }
    
    vaciar() {
        this.cabecera = null;
    }

    obtenerUltimo() {
        let ultimoNodo = this.cabecera;
        if (ultimoNodo) {
            while (ultimoNodo.siguiente) {
                ultimoNodo = ultimoNodo.siguiente
            }
        }
        return ultimoNodo;
    }

    obtenerPrimero() {
        return this.cabecera;
    }

    append() {
        
    }
}

let nodo1 = new NodoLista(2)
let nodo2 = new NodoLista(5)
nodo1.siguiente = nodo2

let lista = new ListaEnlazada(nodo1)

console.log(lista.cabecera.siguiente.dato) 

console.log(lista.cabecera.dato)