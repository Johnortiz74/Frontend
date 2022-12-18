import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <aside className="md:w-30 lg:w-50 bg-white text-blue-400 m-5 mt-0 p-2 rounded-md shadow-lg">
            <Link
                className="bg-violet-600 w-full m-5 p-3 text-black uppercase font-bold text-center rounded-lg "
                to={"/crear-categoria"}>
                    Crear Categoria
            </Link>
            <div className="py-10">
            <Link
                className="bg-violet-600 w-full m-5 p-3 text-black uppercase font-bold text-center rounded-lg "
                to={"/admin"}>
                    Admin Categoria
            </Link>

            </div>
            
        </aside>
    );
}



export default Sidebar;