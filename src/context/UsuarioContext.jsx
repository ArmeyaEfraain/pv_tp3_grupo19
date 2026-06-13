import { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] =  useState(() => {
        const usuarioGuardado = localStorage.getItem('usuario');

        if (usuarioGuardado){
            return JSON.parse(usuarioGuardado);
        }
        return {
            nombre: "Efrain",
            dni: "41.755.045",
            rol: "Alumno",
            institucion: "Facultad de Ingenieria - Universidad Nacional de Jujuy"
        };
    });

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario(nuevosDatos);
    };

    useEffect(() =>{
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }, [usuario]);

    return (
        <UsuarioContext.Provider
        value={{
            usuario,
            actualizarPerfil
        }}
        >{children}
        </UsuarioContext.Provider>
    );
};