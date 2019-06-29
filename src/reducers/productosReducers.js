import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, 
         AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from '../actions/types';

// Cada reducer tiene su propio state
const initialState = {
    productos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload //action.payload es un array de objetos
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case MOSTRAR_PRODUCTO:
            return {
                ...state,
                producto: action.payload
            }
        case EDITAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map( 
                    producto => producto.id === action.payload.id
                    ? (producto = action.payload) : producto 
                    
                )
            }
        default:
            return state;
    }
}


// ---------------------------------------------------------------------
// Explicacion de como funciona el return en el case
/*  
    return {
                ...state,
                productos: action.payload //action.payload es un array de objetos
            }

    Es lo mismo que poner
    
    return {
                productos: [],
                productos: [{..},{..},{...}]
            }
    Por lo tanto al tener las mismas keys se pisan y queda el de abajo
    
*/