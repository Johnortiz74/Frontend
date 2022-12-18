import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <header className="bg-white text-blue-400 m-5 p-5 border-b rounded-md">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl text-violet-600 font-black text-center m-5 md:mb-0">
                    Panel de Administrador
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="submit"
                        value="Cerrar Sesión"
                        className="bg-violet-600 m-5 p-3  text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
                        onClick = {cerrarSesion}
                    />
                </div>
            </div>
        </header>
        
    );
}



export default Header;

