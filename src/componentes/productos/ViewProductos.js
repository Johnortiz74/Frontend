import React from "react";

export const ViewProductos = ({ producto }) => {

  const { nombre, descripcion, stock, precio, imagen } = producto;
  return (
    <div className="border-b p-5 justify-between items-center">
      <div className="flex flex-col items-start">
        <img src="{imagen}" width="150" height="150" alt="" />
        <p className="mb-1 text-xl text-gray-50">nombre:{nombre}</p>
        <p className="mb-1 text-xl text-gray-50">descripcion:{descripcion}</p>
        <p className="mb-1 text-xl text-gray-50">stock:{stock}</p>
        <p className="mb-1 text-xl text-gray-50">precio:{precio}</p>

      </div>

      <div className="flex flex-col lg:flex-row gap-2">
        <button
          className="bg-indigo-500 px-4 py-3 text-white uppercase font-bold"

        >Editar</button>

        <button
          className="bg-indigo-500 px-4 py-3 text-white uppercase font-bold"

        >Eliminar</button>
      </div>

    </div>
  )
}

export default ViewProductos;