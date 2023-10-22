import { useContext, useState } from 'react'
import { Banner } from '../components/Banner'
import { UserContext } from "../context/UserContext"

export const Perfil = () => {
  const { user } = useContext(UserContext)
  const {email, firstname, lastname, address} = user

  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstname, setEditedFirstname] = useState(firstname);
  const [editedLastname, setEditedLastname] = useState(lastname);
  const [editedAddress, setEditedAddress] = useState(address);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes agregar lógica para guardar los cambios en tu base de datos.

    // Actualiza los valores de firstname, lastname y address con los valores editados.
    // Después, cambia isEditing a false para volver a la visualización de solo lectura.
    setIsEditing(false);
  };


  return (
    <>
      <Banner text={"Mi Perfil"} />
      <div className="flex justify-center items-center mt-5">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Perfil de Usuario</h2>
        <div className="mb-2">
          <strong>Email:</strong> {email}
        </div>
        {isEditing ? (
          <>
            <div className="mb-2">
              <strong>Nombre:</strong>
              <input
                type="text"
                value={editedFirstname}
                onChange={(e) => setEditedFirstname(e.target.value)}
                className="border rounded-md p-1 ml-2"
              />
              <input
                type="text"
                value={editedLastname}
                onChange={(e) => setEditedLastname(e.target.value)}
                className="border rounded-md p-1 ml-2"
              />
            </div>
            <div className="mb-2">
              <strong>Dirección:</strong>
              <input
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                className="border rounded-md p-1 ml-2"
              />
            </div>
            <button onClick={handleSaveClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Guardar Cambios
            </button>
          </>
        ) : (
          <>
            <div className="mb-2">
              <strong>Nombre:</strong> {firstname} {lastname}
            </div>
            <div className="mb-2">
              <strong>Dirección:</strong> {address}
            </div>
            <button onClick={handleEditClick} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Editar
            </button>
          </>
        )}
      </div>
    </div>
    </>
  )
}