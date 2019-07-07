const UI = require('./UI'); // importar archivo de clase UI

const User = require('./User'); // importar archivo de clase User


const ui = new UI() // nueva clase

const formulario = ui.mostrarFormulario(); 

const form = document.querySelector("#form"); 

form.addEventListener('submit', (e)=>{
	e.preventDefault(e);
	const name = document.querySelector('#name').value;
	const last_name = document.querySelector('#last_name').value;
	const user = new User(name,last_name) // nuevo objeto
	
	// console.log(user.name + user.last_name)

  ui.addUser(user) //agregar objeto user a la clase ui 
	ui.resetForm() //resetear los campos 
})

