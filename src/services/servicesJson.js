import MOCK_DATA from '../data/mock_data.json'

export const pedirDatos = (id, type) => {
  if (type === 'getOne') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCK_DATA.products.find(prod => prod.id + "" === id))
      }, 500)
    })
  } else return new Promise((resolve, reject) => {
    setTimeout(() => {
      id
        ? resolve(MOCK_DATA.products.filter(prod => prod.category === id))
        : resolve(MOCK_DATA.products)
    }, 500)
  })
}