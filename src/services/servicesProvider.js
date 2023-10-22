import * as FirebaseProvider  from './servicesFirebase'
import * as JsonProvider from './servicesJson'

const selectedProvider = FirebaseProvider; 
export const pedirDatos = (id, type) => selectedProvider.pedirDatos(id, type);
export const createOrder = (order) =>selectedProvider.createOrder(order)