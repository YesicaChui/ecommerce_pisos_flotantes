import MOCK_DATA from '../data/mock_data.json'

export  const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA.products)
    }, 500)
  })
}