console.log('comienzo');
const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const foto = document.querySelector('#foto');
const usuario = document.querySelector('#usuario');


console.log(boton);

const generarUsuario = async () => {
    //consultar a la API
    const url = 'https://randomuser.me/api/?gender=male';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    console.log('generar usuario');
    console.log(results);

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    usuario.textContent = datos.login.username;


}


document.addEventListener("DOMContentLoaded", generarUsuario);

