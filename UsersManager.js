//Creación de la Clase UserManager
class UsersManager {
  // Creación de las variables estaticas y privadas
    static #users = [];
    static #nextUserId = 1;

  //Metodo para la creación de usuarios
  create(data) {
    if (!data.id || !data.photo || !data.email || !data.password || !data.role){
      return console.error("Por favor, complete todo los campos a excepción del id.");
    }
    const newUser = {
      id: UserManager.#nextUserId++,
      photo: data.photo,
      email: data.email,
      password: data.password,
      role: data.role,
  }
    UsersManager.#users.push(newUser);
    console.log('El usuario ha sido creado con éxito.')
  }

  //Metodo para la lectura de los usuarios creados
  read() {
    return UsersManager.#users; 
  }
}

const gestorDeUsuarios = new UsersManager();

userManager.create({
  photo: "ruta_imagen_1",
  email: "usuario1@example.com",
  password: "contraseña1",
  role: "rol1",
});

userManager.create({
  photo: "ruta_imagen_2",
  email: "usuario2@example.com",
  password: "contraseña2",
  role: "rol2",
});
// Ejecución del metodo de lectura
console.log(userManager.readUsers());
