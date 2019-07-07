class UI{

	constructor(){
		this.formulario = document.querySelector("#formulario");
		this.usuarioAgregado = document.querySelector("#usuarioAgregado");
	}

	mostrarFormulario(){
		this.formulario.innerHTML = `
		<form id="form">
			<input type="text" id="name" placeholder="name" required> <br>
			<input type="text" id="last_name" placeholder="last_name" required> <br>
			<input type="submit">
		</form>

		`
	}

	addUser(user){
		this.usuarioAgregado.innerHTML += `
			<div>
				<h1>${user.name}</h1> <br>
				<h2>${user.last_name}</h2>
				<a href="#" class="btn btn-danger" name="delete">Delete</a> 
			</div>

		`
	}

	resetForm() {
    document.querySelector("#form").reset();
  }

  deleteUser(element){  	
		element.parentElement.remove(); // si cumple se elimina el padre de este elemento , el bloque de addUser
  }
}

module.exports = UI