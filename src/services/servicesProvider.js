import * as FirebaseProvider from './Firebase/servicesFirebase'
import * as JsonProvider from './JSON/servicesJson'

const selectedProvider = FirebaseProvider;
export const pedirDatos = (id, type) => selectedProvider.pedirDatos(id, type);
export const createOrder = (order) => selectedProvider.createOrder(order)
export const signIn = (email, password) =>selectedProvider.signIn(email, password)
export const signUp = (form) =>selectedProvider.signUp(form)
export const signOut = () =>selectedProvider.signOut()