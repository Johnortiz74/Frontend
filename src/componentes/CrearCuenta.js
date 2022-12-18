import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import crud from '../conexiones/crud';

const CrearCuenta = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({

    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const { nombre, email, password, confirmar } = usuario;

  //verificar y leer contenido datos
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  };

  //validaciones
  const crearCuenta = async () => {
    if (password !== confirmar) {
      console.log('password son diferentes');

      const mensaje = "Las contrasenas son diferentes";
      swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons: {
          confirm: {
            text: "ok",
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });

    } else {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }
      console.log(data);
      const response = await crud.POST(`/api/usuarios`, data);

      //const response = await crud.POST(`/api/usuarios`, data);
      const mensaje = response.msg;
      //console.log(mensaje);
      if (mensaje === "El usuario ya existe") {
        const mensaje = "El usuario ya existe";
        swal({
          title: 'Error',
          text: mensaje,
          icon: 'error',
          buttons: {
            confirm: {
              text: "ok",
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        });
      } else {
        const mensaje = "El usuario fue creado correctamente";
        swal({
          title: 'Informacion',
          text: mensaje,
          icon: 'success',
          buttons: {
            confirm: {
              text: "ok",
              value: true,
              visible: true,
              className: 'btn btn-primary',
              closeModal: true
            }
          }
        });
        //limpia los campos
        setUsuario({
          nombre    :'',
          email     :'',
          password  :'',
          confirmar :''
        })
        //redireccionar nuevamente a la pagina de login
        navigate("/login");

      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();

  }

  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r  from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5x1 tracking-tight text-transparent"> G12 Iniciar seccion Ecommerce</h1>

        <form
          className="my-10 bg-white shadow-lg rounded-lg p-10"
          onSubmit={onSubmit}
        >
          <div className="my-5">

            <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
            <input
              type="nombre"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={onChange}

              placeholder="Ingrese su nombre"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />

            <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />

            <label className="uppercase text-gray-600 block text-xl font-bold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />

            <label className="uppercase text-gray-600 block text-xl font-bold">Confirme su Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              onChange={onChange}
              placeholder="Confirmacion Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />

            <input
              type="submit"
              value="Registrar Usuario"
              className="bg-violet-600 mt-5 w-full py-3  text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
            />
            <Link
              className="block text-center my-5 "
              to={"/"}
            >
              Regresar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
export default CrearCuenta;